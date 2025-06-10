import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthScreens } from '@/app/constants/Screens';

type CategoryNavigationProp = NavigationProp<Record<string, object | undefined>>;

interface CategoryItem {
  id: string;
  label: string;
  icon: any; // Local image requires "any" or a custom type
}

const CategoryScreen = () => {
  const navigation = useNavigation<CategoryNavigationProp>();

  // Example categories array; adapt icons and labels as needed
  const categories: CategoryItem[] = [
    { id: 'Politics', label: 'Politics', icon: require('../../assets/politics.png') },
    { id: 'Education', label: 'Education', icon: require('../../assets/education.png') },
    { id: 'Business', label: 'Business', icon: require('../../assets/business.png') },
    { id: 'Science', label: 'Science', icon: require('../../assets/science.png') },
    { id: 'Sports', label: 'Sports', icon: require('../../assets/sports.png') },
    { id: 'Entertainment', label: 'Entertainment', icon: require('../../assets/entertainment.png') },
    { id: 'Technology', label: 'Technology', icon: require('../../assets/technology.png') },
    { id: 'Startup', label: 'Startup', icon: require('../../assets/startup.png') },
    { id: 'National', label: 'National', icon: require('../../assets/national.png') },
    { id: 'International', label: 'International', icon: require('../../assets/international.png') },
    { id: 'Automobile', label: 'Automobile', icon: require('../../assets/automobile.png') },
    { id: 'Travel', label: 'Travel', icon: require('../../assets/travel.png') },
    { id: 'Lifestyle', label: 'Lifestyle', icon: require('../../assets/lifestyle.png') },
    { id: 'Fashion', label: 'Fashion', icon: require('../../assets/fashion.png') },
    { id: 'Health', label: 'Health', icon: require('../../assets/health.png') },
    { id: 'Miscellaneous', label: 'Miscellaneous', icon: require('../../assets/miscellaneous.png') },
  ];

  // Track selected categories by id
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Toggle selection
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Check if a category is selected
  const isSelected = (categoryId: string) => selectedCategories.includes(categoryId);

  // Renders each category row
  const renderCategoryRow = (item: CategoryItem) => {
    const selected = isSelected(item.id);

    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.rowContainer, selected && styles.selectedRow]}
        onPress={() => toggleCategory(item.id)}
        activeOpacity={0.7}
      >
        {/* Left Icon */}
        <Image source={item.icon} style={styles.categoryIcon} />

        {/* Category Label */}
        <Text style={[styles.categoryLabel, selected && styles.selectedLabel]}>
          {item.label}
        </Text>

        {/* Right Checkmark/Radio Icon */}
        {selected ? (
          <Icon name="checkmark-circle-2" fill="#50C878" style={styles.checkIcon} />
        ) : (
          <Icon name="radio-button-off" fill="#7F8C8D" style={styles.checkIcon} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Header / Logo */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/icon1.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Which categories interest you?</Text>
        <Text style={styles.subtitle}>Choose 3 or more categories</Text>
      </View>

      {/* Category Rows */}
      {categories.map(renderCategoryRow)}

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate(AuthScreens.Setting)}
      >
        <Icon name="arrow-forward" fill="#FFF" style={styles.arrowIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    marginTop: 50,
  },
  contentContainer: {
    paddingVertical: 20, // Extra space on top & bottom
    paddingHorizontal: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9', // Light card background
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  selectedRow: {
    backgroundColor: '#ECF9F3', // Slightly different background when selected
  },
  categoryIcon: {
    width: 32,
    height: 32,
    marginRight: 16,
    resizeMode: 'contain',
  },
  categoryLabel: {
    flex: 1,
    fontSize: 16,
    color: '#2C3E50',
  },
  selectedLabel: {
    color: '#50C878',
    fontWeight: '600',
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
  nextButton: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#50C878',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
});