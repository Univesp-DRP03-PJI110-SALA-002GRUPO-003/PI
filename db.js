import { createClient } from '@supabase/supabase-js'

const dbUrl = process.env.DB_URL
const dbKey = process.env.DB_KEY
const dbClient = createClient(dbUrl, dbKey)

export default dbClient