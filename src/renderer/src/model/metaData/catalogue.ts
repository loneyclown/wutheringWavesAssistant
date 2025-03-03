import { TDamageAttrKey, TWeaponTypeKey } from '../base/type'

interface ICatalogueData {
  id: number
  name: string
  damageAttr: TDamageAttrKey
  weaponType: TWeaponTypeKey
  rat: number
}

const catalogueData: ICatalogueData[] = [
  {
    id: -1,
    name: '桃祈',
    weaponType: '长刃',
    damageAttr: '湮灭',
    rat: 4
  },
  {
    id: -1,
    name: '渊武',
    weaponType: '臂铠',
    damageAttr: '导电',
    rat: 4
  },
  {
    id: -1,
    name: '莫特斐',
    weaponType: '佩枪',
    damageAttr: '热熔',
    rat: 4
  },
  {
    id: -1,
    name: '丹瑾',
    weaponType: '迅刀',
    damageAttr: '湮灭',
    rat: 4
  },
  {
    id: -1,
    name: '秋水',
    weaponType: '佩枪',
    damageAttr: '气动',
    rat: 4
  },
  {
    id: -1,
    name: '散华',
    weaponType: '迅刀',
    damageAttr: '冷凝',
    rat: 4
  },
  {
    id: -1,
    name: '炽霞',
    weaponType: '佩枪',
    damageAttr: '热熔',
    rat: 4
  },
  {
    id: -1,
    name: '白芷',
    weaponType: '音感仪',
    damageAttr: '冷凝',
    rat: 4
  },
  {
    id: -1,
    name: '釉瑚',
    weaponType: '臂铠',
    damageAttr: '冷凝',
    rat: 4
  },
  {
    id: -1,
    name: '秧秧',
    weaponType: '迅刀',
    damageAttr: '气动',
    rat: 4
  },
  {
    id: -1,
    name: '灯灯',
    weaponType: '长刃',
    damageAttr: '导电',
    rat: 4
  },
  {
    id: -1,
    name: '漂泊者-湮灭',
    weaponType: '迅刀',
    damageAttr: '湮灭',
    rat: 5
  },
  {
    id: -1,
    name: '漂泊者-衍射',
    weaponType: '迅刀',
    damageAttr: '衍射',
    rat: 5
  },
  {
    id: -1,
    name: '凌阳',
    weaponType: '臂铠',
    damageAttr: '冷凝',
    rat: 5
  },
  {
    id: -1,
    name: '维里奈',
    weaponType: '音感仪',
    damageAttr: '衍射',
    rat: 5
  },
  {
    id: -1,
    name: '安可',
    weaponType: '音感仪',
    damageAttr: '热熔',
    rat: 5
  },
  {
    id: -1,
    name: '卡卡罗',
    weaponType: '长刃',
    damageAttr: '导电',
    rat: 5
  },
  {
    id: -1,
    name: '鉴心',
    weaponType: '臂铠',
    damageAttr: '气动',
    rat: 5
  },
  {
    id: -1,
    name: '忌炎',
    weaponType: '长刃',
    damageAttr: '气动',
    rat: 5
  },
  {
    id: -1,
    name: '吟霖',
    weaponType: '音感仪',
    damageAttr: '导电',
    rat: 5
  },
  {
    id: -1,
    name: '今汐',
    weaponType: '长刃',
    damageAttr: '衍射',
    rat: 5
  },
  {
    id: -1,
    name: '长离',
    weaponType: '迅刀',
    damageAttr: '热熔',
    rat: 5
  },
  {
    id: -1,
    name: '折枝',
    weaponType: '音感仪',
    damageAttr: '冷凝',
    rat: 5
  },
  {
    id: -1,
    name: '相里要',
    weaponType: '臂铠',
    damageAttr: '导电',
    rat: 5
  },
  {
    id: -1,
    name: '守岸人',
    weaponType: '音感仪',
    damageAttr: '衍射',
    rat: 5
  },
  {
    id: -1,
    name: '椿',
    weaponType: '迅刀',
    damageAttr: '湮灭',
    rat: 5
  },
  {
    id: -1,
    name: '珂莱塔',
    weaponType: '佩枪',
    damageAttr: '冷凝',
    rat: 5
  },
  {
    id: -1,
    name: '洛可可',
    weaponType: '臂铠',
    damageAttr: '湮灭',
    rat: 5
  },
  {
    id: -1,
    name: '菲比',
    weaponType: '音感仪',
    damageAttr: '衍射',
    rat: 5
  }
]

interface ICatalogueMap {
  [key: string]: ICatalogueData
}

export const catalogueDataMap: ICatalogueMap = catalogueData.reduce((acc, item) => {
  acc[item.name] = item
  return acc
}, {} as ICatalogueMap)

export default catalogueData
