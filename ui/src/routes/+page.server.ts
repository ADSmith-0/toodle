import { redirect } from '@sveltejs/kit';

export function load() {
  // TODO: Change so that it redirects to login if the user doesn't have an active token
  redirect(307, '/login');
}
