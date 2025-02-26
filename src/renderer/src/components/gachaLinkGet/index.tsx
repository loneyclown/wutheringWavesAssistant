import { Alert, Card, CardBody, Code } from '@heroui/react'
import React from 'react'

function GachaLinkGet(): JSX.Element {
  const [filePath, setFilePath] = React.useState<string>('')
  const [link, setLink] = React.useState<string>('')

  const handleClick = async (): Promise<void> => {
    const filePaths = await window.api.selectDirs()
    if (filePaths.length > 0) {
      const newFilePath = filePaths[0]
      setFilePath(newFilePath)

      const logPath = window.api.path.join(newFilePath, 'Saved', 'Logs', 'Client.log')
      const content: string = window.api.fs.readFileSync(logPath, 'utf-8')
      const regex =
        /https:\/\/aki-gm-resources.aki-game.com\/aki\/gacha\/index.html#\/record\?svr_id=([a-zA-Z0-9])*&player_id=(\d+)(.*)",/g
      const matches = content.matchAll(regex)
      let linkStr = ''
      for (const match of matches) {
        linkStr = match[0].slice(0, -2)
      }
      setLink(linkStr)
    }
  }

  return (
    <div className="space-y-1">
      <Card fullWidth>
        <CardBody>
          <div className="flex items-center mb-3">
            <p className="text-md mb-1 mr-4">抽卡链接提取</p>
          </div>
          <div className="max-w-full">
            <div className="max-w-full gap-x-8 gap-y-16">
              <div className="max-w-xl lg:max-w-lg">
                <p className="text-lg leading-8 text-gray-300">
                  选择安装鸣潮的文件夹，需要到Client目录，比如：
                </p>
                <Code>D:\GAME\Wuthering Waves\Wuthering Waves Game\Client</Code>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <input
                    value={filePath}
                    readOnly
                    placeholder="选择你的文件夹"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6"
                  />
                  <button
                    onClick={handleClick}
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    选择文件夹
                  </button>
                </div>
              </div>
              {filePath && (
                <div className="mt-6">
                  {link ? (
                    <textarea
                      className="w-full h-40 border-0 bg-transparent text-light-white"
                      value={link}
                      readOnly
                    ></textarea>
                  ) : (
                    <Alert
                      color="warning"
                      title="无法识别到抽卡链接，请重新打开游戏的抽卡记录页面"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
    // <>
    //   <div className="relative isolate overflow-hidden w-full h-full">

    //   </div>
    // </>
  )
}

export default GachaLinkGet
