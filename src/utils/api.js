import { supabase } from './supabase';

// Convert camelCase to snake_case for database
const toSnakeCase = (obj) => {
  const snakeObj = {};
  Object.keys(obj).forEach(key => {
    const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
    snakeObj[snakeKey] = obj[key];
  });
  return snakeObj;
};

// Convert snake_case to camelCase from database
const toCamelCase = (obj) => {
  const camelObj = {};
  Object.keys(obj).forEach(key => {
    const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    camelObj[camelKey] = obj[key];
  });
  return camelObj;
};

export const saveResponse = async (responseData) => {
  try {
    // Convert camelCase to snake_case for database insert
    const dbData = toSnakeCase({
      ...responseData,
      timestamp: new Date().toISOString(),
    });

    const { data, error } = await supabase
      .from('responses')
      .insert([dbData])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Convert back to camelCase for consistency
    return toCamelCase(data[0]);
  } catch (error) {
    console.error('Error saving response:', error);
    throw error;
  }
};

export const fetchResponses = async () => {
  try {
    const { data, error } = await supabase
      .from('responses')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    // Convert all responses from snake_case to camelCase
    return data.map(item => toCamelCase(item));
  } catch (error) {
    console.error('Error fetching responses:', error);
    throw error;
  }
};
