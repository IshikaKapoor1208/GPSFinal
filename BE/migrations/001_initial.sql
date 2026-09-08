CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY,
  reference_id VARCHAR(32) NOT NULL UNIQUE,
  lead_type VARCHAR(32) NOT NULL CHECK (lead_type IN ('inquiry', 'callback_request', 'document_booking')),
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  email VARCHAR(254),
  service VARCHAR(160) NOT NULL,
  details JSONB NOT NULL DEFAULT '{}'::jsonb,
  email_status VARCHAR(16) NOT NULL DEFAULT 'pending' CHECK (email_status IN ('pending', 'sent', 'failed')),
  email_error TEXT,
  email_sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS leads_reference_id_idx ON leads(reference_id);
CREATE INDEX IF NOT EXISTS leads_lead_type_created_at_idx ON leads(lead_type, created_at DESC);
