// 使用 import.meta.glob 批量导入图片并生成映射
const images = import.meta.glob('../../assets/image/material/*.png', { eager: true })
const imageMap = Object.entries(images).reduce(
  (acc, [key, value]) => {
    const fileName = key.replace('../../assets/image/material/', '').replace('.png', '')
    acc[fileName] = (value as any).default
    return acc
  },
  {} as Record<string, string>
)

interface IMaterialData {
  name: string
  img: string
  rat: number
}

const materialData: IMaterialData[] = [
  {
    name: '冥扉的欢觑',
    img: imageMap['冥扉的欢觑'],
    rat: 4
  },
  {
    name: '焚磷厄骨',
    img: imageMap['焚磷厄骨'],
    rat: 4
  },
  {
    name: '白金机心',
    img: imageMap['白金机心'],
    rat: 4
  },
  {
    name: '涤罪音螺',
    img: imageMap['涤罪音螺'],
    rat: 4
  },
  {
    name: '幽囚拓扑',
    img: imageMap['幽囚拓扑'],
    rat: 4
  },
  {
    name: '无妄之羽',
    img: imageMap['无妄之羽'],
    rat: 4
  },
  {
    name: '碑趺古钟',
    img: imageMap['碑趺古钟'],
    rat: 4
  },
  {
    name: '不息坏灭',
    img: imageMap['不息坏灭'],
    rat: 4
  },
  {
    name: '岁时之角刃',
    img: imageMap['岁时之角刃'],
    rat: 4
  },
  {
    name: '纷争声核',
    img: imageMap['纷争声核'],
    rat: 4
  },
  {
    name: '销金之翎',
    img: imageMap['销金之翎'],
    rat: 4
  },
  {
    name: '霍闪声核',
    img: imageMap['霍闪声核'],
    rat: 4
  },
  {
    name: '隐雷声核',
    img: imageMap['隐雷声核'],
    rat: 4
  },
  {
    name: '哀歌声核',
    img: imageMap['哀歌声核'],
    rat: 4
  },
  {
    name: '怒号声核',
    img: imageMap['怒号声核'],
    rat: 4
  },
  {
    name: '呼啸岩拳',
    img: imageMap['呼啸岩拳'],
    rat: 4
  },
  {
    name: '留音声核',
    img: imageMap['留音声核'],
    rat: 4
  },
  {
    name: '群孽异核',
    img: imageMap['群孽异核'],
    rat: 4
  },
  {
    name: '神秘密码',
    img: imageMap['神秘密码'],
    rat: 5
  },
  {
    name: '全频潮蚀帆核',
    img: imageMap['全频潮蚀帆核'],
    rat: 5
  },
  {
    name: '高频潮蚀帆核',
    img: imageMap['高频潮蚀帆核'],
    rat: 4
  },
  {
    name: '中频潮蚀帆核',
    img: imageMap['中频潮蚀帆核'],
    rat: 3
  },
  {
    name: '低频潮蚀帆核',
    img: imageMap['低频潮蚀帆核'],
    rat: 2
  },
  {
    name: '全频聚方声核',
    img: imageMap['全频聚方声核'],
    rat: 5
  },
  {
    name: '高频聚方声核',
    img: imageMap['高频聚方声核'],
    rat: 4
  },
  {
    name: '中频聚方声核',
    img: imageMap['中频聚方声核'],
    rat: 3
  },
  {
    name: '低频聚方声核',
    img: imageMap['低频聚方声核'],
    rat: 2
  },
  {
    name: '癫狂面罩',
    img: imageMap['癫狂面罩'],
    rat: 5
  },
  {
    name: '扭曲面罩',
    img: imageMap['扭曲面罩'],
    rat: 4
  },
  {
    name: '侵蚀面罩',
    img: imageMap['侵蚀面罩'],
    rat: 3
  },
  {
    name: '压抑面罩',
    img: imageMap['压抑面罩'],
    rat: 2
  },
  {
    name: '特制镣环',
    img: imageMap['特制镣环'],
    rat: 5
  },
  {
    name: '改造镣环',
    img: imageMap['改造镣环'],
    rat: 4
  },
  {
    name: '基准镣环',
    img: imageMap['基准镣环'],
    rat: 3
  },
  {
    name: '简陋镣环',
    img: imageMap['简陋镣环'],
    rat: 2
  },
  {
    name: '全频啸叫声核',
    img: imageMap['全频啸叫声核'],
    rat: 5
  },
  {
    name: '高频啸叫声核',
    img: imageMap['高频啸叫声核'],
    rat: 4
  },
  {
    name: '中频啸叫声核',
    img: imageMap['中频啸叫声核'],
    rat: 3
  },
  {
    name: '低频啸叫声核',
    img: imageMap['低频啸叫声核'],
    rat: 2
  },
  {
    name: '全频呓语声核',
    img: imageMap['全频呓语声核'],
    rat: 5
  },
  {
    name: '高频呓语声核',
    img: imageMap['高频呓语声核'],
    rat: 4
  },
  {
    name: '中频呓语声核',
    img: imageMap['中频呓语声核'],
    rat: 3
  },
  {
    name: '低频呓语声核',
    img: imageMap['低频呓语声核'],
    rat: 2
  },
  {
    name: '声律花蕾',
    img: imageMap['声律花蕾'],
    rat: 5
  },
  {
    name: '声律新叶',
    img: imageMap['声律新叶'],
    rat: 4
  },
  {
    name: '声律萌芽',
    img: imageMap['声律萌芽'],
    rat: 3
  },
  {
    name: '声律种核',
    img: imageMap['声律种核'],
    rat: 2
  },
  {
    name: '海蚀嵌合体239',
    img: imageMap['海蚀嵌合体239'],
    rat: 5
  },
  {
    name: '海蚀嵌合体235',
    img: imageMap['海蚀嵌合体235'],
    rat: 4
  },
  {
    name: '海蚀嵌合体226',
    img: imageMap['海蚀嵌合体226'],
    rat: 3
  },
  {
    name: '海蚀嵌合体210',
    img: imageMap['海蚀嵌合体210'],
    rat: 2
  },
  {
    name: '急板涡流',
    img: imageMap['急板涡流'],
    rat: 5
  },
  {
    name: '行板涡流',
    img: imageMap['行板涡流'],
    rat: 4
  },
  {
    name: '柔板涡流',
    img: imageMap['柔板涡流'],
    rat: 3
  },
  {
    name: '慢板涡流',
    img: imageMap['慢板涡流'],
    rat: 2
  },
  {
    name: '高纯晶化燃素',
    img: imageMap['高纯晶化燃素'],
    rat: 5
  },
  {
    name: '精馏晶化燃素',
    img: imageMap['精馏晶化燃素'],
    rat: 4
  },
  {
    name: '粗萃晶化燃素',
    img: imageMap['粗萃晶化燃素'],
    rat: 3
  },
  {
    name: '含杂晶化燃素',
    img: imageMap['含杂晶化燃素'],
    rat: 2
  },
  {
    name: '异构金属液滴',
    img: imageMap['异构金属液滴'],
    rat: 5
  },
  {
    name: '极化金属液滴',
    img: imageMap['极化金属液滴'],
    rat: 4
  },
  {
    name: '活性金属液滴',
    img: imageMap['活性金属液滴'],
    rat: 3
  },
  {
    name: '惰性金属液滴',
    img: imageMap['惰性金属液滴'],
    rat: 2
  },
  {
    name: '特级能源核心',
    img: imageMap['特级能源核心'],
    rat: 5
  },
  {
    name: '高级能源核心',
    img: imageMap['高级能源核心'],
    rat: 4
  },
  {
    name: '中级能源核心',
    img: imageMap['中级能源核心'],
    rat: 3
  },
  {
    name: '初级能源核心',
    img: imageMap['初级能源核心'],
    rat: 2
  },
  {
    name: '特级共鸣促剂',
    img: imageMap['特级共鸣促剂'],
    rat: 5
  },
  {
    name: '高级共鸣促剂',
    img: imageMap['高级共鸣促剂'],
    rat: 4
  },
  {
    name: '中级共鸣促剂',
    img: imageMap['中级共鸣促剂'],
    rat: 3
  },
  {
    name: '初级共鸣促剂',
    img: imageMap['初级共鸣促剂'],
    rat: 2
  },
  {
    name: '特级密音筒',
    img: imageMap['特级密音筒'],
    rat: 5
  },
  {
    name: '高级密音筒',
    img: imageMap['高级密音筒'],
    rat: 4
  },
  {
    name: '中级密音筒',
    img: imageMap['中级密音筒'],
    rat: 3
  },
  {
    name: '初级密音筒',
    img: imageMap['初级密音筒'],
    rat: 2
  },
  {
    name: '特级调谐器',
    img: imageMap['特级调谐器'],
    rat: 5
  },
  {
    name: '高级调谐器',
    img: imageMap['高级调谐器'],
    rat: 4
  },
  {
    name: '中级调谐器',
    img: imageMap['中级调谐器'],
    rat: 3
  }
]

interface IMaterialMap {
  [key: string]: IMaterialData
}

export const materialMap: IMaterialMap = materialData.reduce((acc, item) => {
  acc[item.name] = item
  return acc
}, {} as IMaterialMap)

export default materialData
