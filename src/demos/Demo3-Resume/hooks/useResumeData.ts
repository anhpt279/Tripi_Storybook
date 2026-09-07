import { useState, useCallback } from 'react';
import type { 
  ResumeData, 
  ResumeListKey, 
  ResumeListItem,
  BasicInfo,
  InterestSkill,
  WorkSkill
} from '../types';
import { createNewItem, initialResumeData } from '../types';
import type { CitySelectValue } from '../../../components/ui/data-entry/city-select';

export const useResumeData = (initialData: ResumeData = initialResumeData) => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [newlyAddedIds, setNewlyAddedIds] = useState<Set<string>>(new Set());
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());

  // Implementation note
  const updateBasicInfo = useCallback((field: keyof BasicInfo, value: string | CitySelectValue) => {
    setResumeData(prev => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        [field]: value
      }
    }));
  }, []);

  // Implementation note
  const updateInterestSkill = useCallback((field: keyof InterestSkill, value: string[]) => {
    setResumeData(prev => ({
      ...prev,
      interestSkill: {
        ...prev.interestSkill,
        [field]: value
      }
    }));
  }, []);

  // Implementation note
  const updateWorkSkill = useCallback((field: keyof WorkSkill, value: string | string[]) => {
    setResumeData(prev => ({
      ...prev,
      workSkill: {
        ...prev.workSkill,
        [field]: value
      }
    }));
  }, []);

  // Implementation note
  const updateSelfEvaluation = useCallback((value: string) => {
    setResumeData(prev => ({
      ...prev,
      selfEvaluation: value
    }));
  }, []);

  // Implementation note - Implementation note
  const addItem = useCallback((listKey: ResumeListKey, itemType: keyof typeof createNewItem) => {
    const newItem = createNewItem[itemType]();
    const newId = newItem.id;
    
    // No items yet. Add one to get started.
    setNewlyAddedIds(prev => new Set([...prev, newId]));
    
    setResumeData(prev => ({
      ...prev,
      [listKey]: [newItem, ...prev[listKey]] // Add the new item to the beginning of the list
    }));
    
    // January
    setTimeout(() => {
      setNewlyAddedIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(newId);
        return newSet;
      });
    }, 1000);
  }, []);

  // Implementation note
  const updateItem = useCallback((
    listKey: ResumeListKey, 
    id: string, 
    field: string, 
    value: any
  ) => {
    setResumeData(prev => ({
      ...prev,
      [listKey]: prev[listKey].map((item: ResumeListItem) => 
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  }, []);

  // Implementation note - Implementation note
  const removeItem = useCallback((listKey: ResumeListKey, id: string) => {
    // No items yet. Add one to get started.
    setDeletingIds(prev => new Set([...prev, id]));
    
    // 300ms debounce
    setTimeout(() => {
      setResumeData(prev => ({
        ...prev,
        [listKey]: prev[listKey].filter((item: ResumeListItem) => item.id !== id)
      }));
      
      // Implementation note
      setDeletingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 300);
  }, []);

  // Implementation note
  const hasItemContent = useCallback((item: ResumeListItem): boolean => {
    // Implementation note
    const checkValue = (value: any): boolean => {
      if (value === null || value === undefined || value === '') {
        return false;
      }
      if (Array.isArray(value)) {
        return value.length > 0 && value.some(checkValue);
      }
      if (typeof value === 'object') {
        // Implementation note
        const objectValues = Object.values(value);
        if (objectValues.length === 0) {
          return false;
        }
        // Implementation note
        return objectValues.some(checkValue);
      }
      if (typeof value === 'number') {
        return value > 0; // author rank
      }
      if (typeof value === 'boolean') {
        return false; // Text（TextisNameVerifiedText）
      }
      return true;
    };

    // Implementation note id No items yet. Add one to get started.
    const { id, ...otherFields } = item;
    return Object.values(otherFields).some(checkValue);
  }, []);

  // Implementation note
  const saveResumeData = useCallback(() => {
    console.log('Action triggered:', resumeData);
    // Implementation note
    return resumeData;
  }, [resumeData]);

  // Implementation note
  const resetResumeData = useCallback(() => {
    setResumeData(initialResumeData);
    setNewlyAddedIds(new Set());
    setDeletingIds(new Set());
  }, []);

  // Implementation note
  const updateResumeData = useCallback((newData: Partial<ResumeData>) => {
    setResumeData(prev => ({
      ...prev,
      ...newData
    }));
  }, []);

  return {
    // Data
    resumeData,
    
    // Implementation note
    newlyAddedIds,
    deletingIds,
    
    // Implementation note
    updateBasicInfo,
    updateInterestSkill,
    updateWorkSkill,
    updateSelfEvaluation,
    
    // Implementation note
    addItem,
    updateItem,
    removeItem,
    hasItemContent,
    
    // Implementation note
    saveResumeData,
    resetResumeData,
    updateResumeData,
    setResumeData
  };
}; 