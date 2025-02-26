import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Select,
  SelectItem,
  Slider
} from '@heroui/react'
import catalogue from '@renderer/model/catalogue'

function MaterialCalculator(): JSX.Element {
  const LiItem = () => (
    <div className="flex w-full justify-between gap-4">
      <div className="flex flex-1 gap-12">
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-10">
            <div className="flex flex-1 gap-4">
              {/* <Select className="max-w-[140px]" items={catalogue} label="角色" placeholder="请选择">
                {(item) => <SelectItem>{item.name}</SelectItem>}
              </Select> */}
              <Slider
                className="max-w-md"
                defaultValue={[1, 10]}
                label="角色等级"
                maxValue={90}
                minValue={1}
                step={1}
              />
            </div>
            <div className="flex flex-1 gap-4">
              <Select className="max-w-[140px]" items={catalogue} label="武器" placeholder="请选择">
                {(item) => <SelectItem>{item.name}</SelectItem>}
              </Select>
              <Slider
                className="max-w-md"
                defaultValue={[1, 10]}
                label="武器等级"
                maxValue={90}
                minValue={1}
                step={1}
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-1 gap-4">
              <Slider
                className="max-w-md"
                defaultValue={[1, 10]}
                label="常态攻击"
                maxValue={10}
                minValue={1}
                step={1}
              />
            </div>
            <div className="flex flex-1 gap-4">
              <CheckboxGroup color="secondary" label="分支强化：属性加成" orientation="horizontal">
                <Checkbox value="buenos-aires">暴击伤害提升2.4%</Checkbox>
                <Checkbox value="sydney">暴击伤害提升5.6%</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-1 gap-4">
              <Slider
                className="max-w-md"
                defaultValue={[1, 10]}
                label="共鸣技能"
                maxValue={10}
                minValue={1}
                step={1}
              />
            </div>
            <div className="flex flex-1 gap-4">
              <CheckboxGroup color="secondary" label="分支强化：属性加成" orientation="horizontal">
                <Checkbox value="san-francisco">攻击提升1.80%</Checkbox>
                <Checkbox value="london">攻击提升4.20%</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-1 gap-4">
              <Slider
                className="max-w-md"
                defaultValue={[1, 10]}
                label="共鸣回路"
                maxValue={10}
                minValue={1}
                step={1}
              />
            </div>
            <div className="flex flex-1 gap-4">
              <CheckboxGroup
                color="secondary"
                defaultValue={['buenos-aires', 'san-francisco']}
                label="分支强化：固定技能"
                orientation="horizontal"
              >
                <Checkbox value="tokyo">固有技能: 临在</Checkbox>
                <Checkbox value="tokyo">固有技能: 启示</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-1 gap-4">
              <Slider
                className="max-w-md"
                defaultValue={[1, 10]}
                label="共鸣解放"
                maxValue={10}
                minValue={1}
                step={1}
              />
            </div>
            <div className="flex flex-1 gap-4">
              <Slider
                className="max-w-md"
                defaultValue={[1, 10]}
                label="变奏技能"
                maxValue={10}
                minValue={1}
                step={1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1.5">
        <Button>删除</Button>
      </div>
    </div>
  )

  return (
    <div className="space-y-1">
      <Card>
        <CardBody>
          <div className="flex items-center mb-3">
            <p className="text-md mb-1 mr-4">养成计划</p>
            <Button>添加角色</Button>
          </div>
          <Accordion variant="shadow" selectionMode="multiple">
            <AccordionItem key="1" aria-label="Accordion 1" title="菲比">
              <LiItem />
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="坎特蕾拉">
              <LiItem />
            </AccordionItem>
          </Accordion>
        </CardBody>
      </Card>
    </div>
  )
}

export default MaterialCalculator
