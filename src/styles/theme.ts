/**
 * Theme configuration for the application
 *
 * This file provides a simplified theme system with layer-specific color mappings
 * using standard Tailwind colors.
 */

// The layer type corresponds to each major section of the application
export type LayerType =
  | 'craftsmanship' // Orange
  | 'frontend' // Blue
  | 'backend' // Green
  | 'database' // Indigo
  | 'devops' // Fuchsia
  | 'testing'; // Yellow

// Direct mapping to Tailwind color names
const layerColors: Record<LayerType, string> = {
  craftsmanship: 'orange',
  frontend: 'blue',
  backend: 'green',
  database: 'indigo',
  devops: 'fuchsia',
  testing: 'yellow',
};

// Ultra-simplified layer class generator
export const getLayerClasses = {
  container: (layerType: LayerType, isSelected: boolean): string => {
    return isSelected
      ? `bg-gray-700/60 border-${layerColors[layerType]}-300 border shadow-md`
      : `bg-gray-800/70 hover:bg-gray-700/70  hover:shadow-sm`;
  },

  openState: (layerType: LayerType, isOpen: boolean): string => {
    return isOpen ? `mb-1 ` : '';
  },

  badge: (layerType: LayerType): string => {
    return `bg-${layerColors[layerType]}-400/20 text-white`;
  },

  stackContainer: (layerType: LayerType, isSelected: boolean): string => {
    return isSelected
      ? `bg-gray-700/60 border-${layerColors[layerType]}-400 border shadow-lg`
      : `bg-gray-700/60 hover:bg-gray-600/60  hover:shadow-sm`;
  },

  libraryItem: (layerType: LayerType, isSelected: boolean): string => {
    return isSelected
      ? `bg-${layerColors[layerType]}-400/20 border-${layerColors[layerType]}-600 border shadow-md`
      : `bg-gray-600/50 hover:bg-gray-500/50 border-${layerColors[layerType]}-200/50 border hover:shadow-sm`;
  },

  toggleSwitch: (
    layerType: LayerType,
    isSelected: boolean
  ): { borderColor: string; backgroundColor: string } => {
    return {
      borderColor: isSelected
        ? `var(--tw-${layerColors[layerType]}-500)`
        : 'transparent',
      backgroundColor: isSelected
        ? `var(--tw-${layerColors[layerType]}-100)`
        : '#374151',
    };
  },

  toggleHandle: (
    layerType: LayerType,
    isSelected: boolean
  ): { backgroundColor: string; transform: string } => {
    return {
      backgroundColor: isSelected
        ? `var(--tw-${layerColors[layerType]}-500)`
        : '#D1D5DB',
      transform: isSelected ? 'translateX(16px)' : 'translateX(0)',
    };
  },

  text: (layerType: LayerType): string => {
    return `text-${layerColors[layerType]}-500`;
  },

  selectedRuleBadge: (layerType: LayerType): string => {
    return `bg-${layerColors[layerType]}-400/20 text-white`;
  },
};

// For backward compatibility with any remaining code
import { Layer } from '../data/dictionaries';

export const layerToType = (layer: Layer): LayerType => {
  switch (layer) {
    case Layer.CRAFTSMANSHIP:
      return 'craftsmanship';
    case Layer.FRONTEND:
      return 'frontend';
    case Layer.BACKEND:
      return 'backend';
    case Layer.DATABASE:
      return 'database';
    case Layer.DEVOPS:
      return 'devops';
    case Layer.TESTING:
      return 'testing';
    default:
      return 'craftsmanship';
  }
};
