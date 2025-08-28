-- Create user_supplements table for tracking user's supplement usage
create table if not exists public.user_supplements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  supplement_id uuid not null references public.supplements(id) on delete cascade,
  dosage text,
  frequency text,
  start_date date,
  end_date date,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, supplement_id)
);

-- Enable RLS
alter table public.user_supplements enable row level security;

-- Create policies
create policy "user_supplements_select_own"
  on public.user_supplements for select
  using (auth.uid() = user_id);

create policy "user_supplements_insert_own"
  on public.user_supplements for insert
  with check (auth.uid() = user_id);

create policy "user_supplements_update_own"
  on public.user_supplements for update
  using (auth.uid() = user_id);

create policy "user_supplements_delete_own"
  on public.user_supplements for delete
  using (auth.uid() = user_id);
