// Axios
import { CancelTokenSource } from 'axios'

export type TRequestSaver = Record<string, CancelTokenSource>
