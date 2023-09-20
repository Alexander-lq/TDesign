interface Setting {
  id?: number;
  theme: string;
  externalPlayer: string;
  recordShortcut: string;
  defaultHot: string;
  defaultSearchRecommend: string;
  defaultSearchType: string;
  defaultCheckModel: boolean;
  defaultChangeModel: boolean;
  defaultIptvEpg: string;
  iptvSkipIpv6: boolean;
  iptvThumbnail: boolean;
  restoreWindowPositionAndSize: boolean;
  defaultSite: number | null;
  defaultIptv: number | null;
  defaultAnalyze: number | null;
  analyzeFlag: string[];
  analyzeQuickSearchType: string;
  analyzeSupport: boolean;
  broadcasterType: string;
  softSolution: boolean;
  skipStartEnd: boolean;
  agreementMask: boolean;
  recordShortcut: string;
  selfBoot: boolean;
  hardwareAcceleration: boolean;
  doh: string;
  ua: string;
  communitySubscribe: string;
  webdevUrl: string;
  webdevUsername: string;
  webdevPassword: string;
}

interface Star {
  id?: number;
  siteKey: string;
  videoId: number;
  videoImage: string;
  videoName: string;
  videoType?: string;
  videoUpdate: boolean;
}

interface Site {
  id?: number;
  key: string;
  name: string;
  api: string;
  download: string;
  playUrl?: string;
  type: number;
  search: number;
  isActive: boolean;
  group: string;
  resource: number | null;
  categories: string | null;
}

interface History {
  id?: number;
  date: string | number | Date;
  siteKey: string;
  siteSource: string;
  duration?: number | null;
  playType: string;
  playEnd: boolean;
  videoId: number;
  videoImage: string;
  videoName: string;
  videoIndex: string;
  watchTime: number;
  skipTimeInStart: number;
  skipTimeInEnd: number;
}

interface Iptv {
  id?: number;
  name: string;
  url: string;
  epg: string;
  isActive: boolean;
}

interface ChannelList {
  id?: number;
  name: string;
  logo: string;
  url: string;
  group: string;
}

interface Analyze {
  id?: number;
  name: string;
  url: string;
  isActive: boolean;
}

interface AnalyzeHistory {
  id?: number;
  date: string | number | Date;
  analyzeId: number;
  videoUrl: string;
  videoName: string;
}

interface SearchHistory {
  id?: number;
  title: string;
  type: string;
}