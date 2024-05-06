// TODO (Valle) -> consolidate commands into single file?
import dayjs from 'dayjs';

import { knexClient } from './knex_client.ts';

// TODO (Valle) -> assert received arg is a valid string

const name = dayjs().format('YYYY-MM-DD') + 'gigi';

await knexClient.migrate.make(name);
