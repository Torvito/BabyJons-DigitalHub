export type ActiveView = 'public' | 'portal' | 'admin';

export type PortfolioCategory = 'all' | 'branding' | 'web' | 'media';

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'branding' | 'web' | 'media';
  categoryLabel: string;
  image: string;
  desc: string;
  client: string;
  deliverables: string[];
  results?: string;
  year: string;
}

export interface CalcService {
  id: string;
  title: string;
  priceUsd: number;
  desc: string;
  features: string[];
  badge?: string;
}

export type SpeedOption = 'standard' | 'fast' | 'express';

export interface SpeedConfig {
  id: SpeedOption;
  label: string;
  timeline: string;
  multiplier: number;
  badge?: string;
}

export interface Milestone {
  id: string;
  title: string;
  done: boolean;
  date: string;
  notes?: string;
}

export interface VaultFile {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'zip' | 'figma' | 'mp4' | 'img';
  date: string;
  downloadUrl?: string;
}

export interface ClientProject {
  id: string;
  code: string;
  tag: string;
  title: string;
  clientName: string;
  status: string;
  progress: number;
  totalCost: number;
  paidAmount: number;
  pendingAmount: number;
  startDate: string;
  estimatedDelivery: string;
  milestones: Milestone[];
  vaultFiles: VaultFile[];
}

export type LeadStage = 1 | 2 | 3 | 4;

export interface LeadItem {
  id: number;
  client: string;
  service: string;
  budget: number;
  phone: string;
  stage: LeadStage;
  date: string;
  notes?: string;
}
