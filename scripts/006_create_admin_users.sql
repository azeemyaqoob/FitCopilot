-- Create admin_users table for admin access control
create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  role text default 'admin' check (role in ('admin', 'super_admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.admin_users enable row level security;

-- Policy for admins to view their own admin status
create policy "admin_users_select_own"
  on public.admin_users for select
  using (auth.uid() = id);

-- Policy for super_admins to manage admin users
create policy "admin_users_manage_super_admin"
  on public.admin_users for all
  using (
    exists (
      select 1 from public.admin_users
      where admin_users.id = auth.uid()
      and admin_users.role = 'super_admin'
    )
  );

-- Update contact_forms policy to allow admin access
create policy "contact_forms_select_admin"
  on public.contact_forms for select
  to authenticated
  using (
    exists (
      select 1 from public.admin_users
      where admin_users.id = auth.uid()
    )
  );

create policy "contact_forms_update_admin"
  on public.contact_forms for update
  to authenticated
  using (
    exists (
      select 1 from public.admin_users
      where admin_users.id = auth.uid()
    )
  );
