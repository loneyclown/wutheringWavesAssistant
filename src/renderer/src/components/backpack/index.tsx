import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  NumberInput,
  ScrollShadow
} from '@heroui/react'
import materialData from '@renderer/model/material'
import classNames from 'classnames'

function Backpack(): JSX.Element {
  console.log('materialData', materialData)
  const list = [...materialData]

  return (
    <div className="space-y-1">
      <Card>
        <CardBody>
          <div className="flex items-center mb-3">
            <p className="text-md mb-1 mr-4">背包材料</p>
          </div>
          <ScrollShadow hideScrollBar className="max-w-full max-h-[86vh]">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-8">
              {list.map((item, index) => (
                <Card key={index} shadow="sm">
                  <CardHeader className="p-1">{item.name}</CardHeader>
                  <CardBody className="overflow-visible p-1">
                    <Image
                      alt={item.name}
                      className={classNames('w-full', 'h-[120px]', `rat-${item.rat}`)}
                      radius="lg"
                      shadow="sm"
                      src={item.img}
                      width="100%"
                    />
                  </CardBody>
                  <CardFooter className="text-small flex-col">
                    <NumberInput label="数量" size="sm" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollShadow>
        </CardBody>
      </Card>
    </div>
  )
}

export default Backpack
