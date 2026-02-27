export interface Profile {
	id: string;
	first_name: string;
	last_name: string | null;
	description: string | null;
	avatar_url: string | null;
	username: string;
}
