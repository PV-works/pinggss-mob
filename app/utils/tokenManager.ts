import * as SecureStore from 'expo-secure-store';
import { store } from '../store/store';
import { setCognitoIdToken } from '../store/slices/tokenID/slice';
import { APIGatewayConsts } from '../constants/mainAPI';
import CryptoJS from 'crypto-js';

class TokenManager {
  private static instance: TokenManager;
  private _idToken: string;

  private constructor() {
    this._idToken = store.getState().cognitoIdToken.idToken;
  }

  public static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  public async getToken(): Promise<string> {
    if (!this._idToken) {
      await this.refreshToken();
    }
    return this._idToken;
  }

  public async refreshToken(): Promise<void> {
    try {
      const username = await SecureStore.getItemAsync('username');
      const password = await SecureStore.getItemAsync('password');

      if (!username || !password) {
        throw new Error('No stored credentials');
      }

      console.log('Refreshing token with username: ', username, 'and password: ', password);

      const response = await fetch(APIGatewayConsts.Endpoint + '/users/auth/get-id-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: encryptPayload(username),
          password: encryptPayload(password),
        }),
      });

      const data = await response.json();
      if (data?.idToken) {
        this._idToken = data.idToken;
        store.dispatch(setCognitoIdToken(data.idToken));
      } else {
        throw new Error('Failed to refresh token - no token in response');
      }
    } catch (error: any) {
      console.error('Token refresh error:', error.message);
      throw error;
    }
  }

  public clearToken(): void {
    this._idToken = '';
  }
}

const encryptPayload = (text: string): string => {
  // Derive a 256-bit key using SHA-256
 const key = CryptoJS.SHA256(process.env.SECRET_KEY!);
  // Generate a random 16-byte IV
  const iv = CryptoJS.lib.WordArray.random(16);

  // Encrypt the text using AES-256 in CBC mode with PKCS7 padding
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // Get the ciphertext as a hex string
  const encryptedHex = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
  
  // Get the IV as a hex string
  const ivHex = iv.toString(CryptoJS.enc.Hex);

  // Concatenate IV and ciphertext with a colon
  return `${ivHex}:${encryptedHex}`;
};

export default TokenManager; 