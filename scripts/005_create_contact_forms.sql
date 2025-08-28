-- Create contact_forms table for storing form submissions
create table if not exists public.contact_forms (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service_type text not null,
  message text not null,
  status text default 'pending' check (status in ('pending', 'contacted', 'completed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS - only admins can view all, users can only view their own
alter table public.contact_forms enable row level security;

-- Policy for users to insert their own forms
create policy "contact_forms_insert_own"
  on public.contact_forms for insert
  to authenticated
  with check (true);

-- Policy for users to view their own forms (based on email)
create policy "contact_forms_select_own"
  on public.contact_forms for select
  to authenticated
  using (
    exists (
      select 1 from auth.users 
      where auth.users.id = auth.uid() 
      and auth.users.email = contact_forms.email
    )
  );
