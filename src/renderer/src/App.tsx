import { Card, CardBody, Tab, Tabs } from '@heroui/react'
import Backpack from './components/backpack'
import GachaLinkGet from './components/gachaLinkGet'
import MaterialCalculator from './components/materialCalculator'

function App(): JSX.Element {
  return (
    <>
      <div className="h-full w-full flex flex-col">
        <Tabs aria-label="Options" isVertical>
          <Tab key="home" title="Home" className="flex-1">
            <Card>
              <CardBody>HOME</CardBody>
            </Card>
          </Tab>
          <Tab key="抽卡链接提取" title="抽卡链接提取" className="flex-1">
            <Card>
              <CardBody>
                <GachaLinkGet />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="养成计划" title="养成计划" className="flex-1">
            <MaterialCalculator />
          </Tab>
          <Tab key="背包材料" title="背包材料" className="flex-1">
            <Backpack />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default App
