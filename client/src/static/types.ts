export interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar: string;
  cover: string;
  gender: string;
  birthday: string;
  verify: number;
  isOnline: number;
  bio: string | null;
  job: string | null;
  highSchool: string | null;
  college: string | null;
  currentCity: string | null;
  hometown: string | null;
  relationship: string | null;
  relationship_to: number | null;
  notification: number;
}

export interface Tag {
  id: number;
  username: string;
}
export interface Relation {
  id: number;
  request_id: number;
  accept_id: number;
  status: number;
  date_request: string;
}

export interface PostType {
  id: number;
  user_id: number;
  content: string;
  audience: string;
  feeling?: string | null;
  location?: string | null;
  bgUrl?: string | null;
  textColor?: string | null;
  date: string;
  mediaUrl?: string | null;
  type?: string | null;
}

