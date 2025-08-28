-- Create a default admin user (you'll need to update this with a real user ID after they sign up)
-- This is just an example - in production, you'd add admin users through a secure process

-- First, you need to sign up a user through the normal auth flow, then run:
-- INSERT INTO public.admin_users (id, role) VALUES ('USER_ID_HERE', 'super_admin');

-- For now, we'll create a placeholder that you can update later
-- Replace 'YOUR_USER_ID_HERE' with the actual user ID from auth.users after creating an admin account

-- Example (uncomment and update with real user ID):
-- INSERT INTO public.admin_users (id, role) 
-- VALUES ('00000000-0000-0000-0000-000000000000', 'super_admin')
-- ON CONFLICT (id) DO NOTHING;

-- To find user IDs, you can query: SELECT id, email FROM auth.users;
