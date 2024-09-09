import type { modelWaline } from '@/models/waline'

interface modelComment {
  enable: boolean
  type: 'waline'
  waline: modelWaline
}
