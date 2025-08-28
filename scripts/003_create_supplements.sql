-- Create supplements table
create table if not exists public.supplements (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  brand text,
  category text not null,
  description text,
  ingredients text[],
  benefits text[],
  dosage_instructions text,
  warnings text,
  fda_approved boolean default false,
  price_range text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- This table doesn't need RLS as it's reference data
-- But we'll add a policy for public read access
alter table public.supplements enable row level security;

create policy "supplements_select_all"
  on public.supplements for select
  to authenticated
  using (true);
