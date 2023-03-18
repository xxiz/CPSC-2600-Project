// import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

import { Icon } from "@iconify/react"

const features = [
  {
    name: 'One-Click Setup',
    description:
      'At SalesScout we believe that you should be able to get up and running with one click, enter a keyword and we start listening for updates right away.',
    icon: "mdi:mouse",
  },
  {
    name: 'Advanced Filtering',
    description:
      'We have a powerful filtering system that allows you to filter out the noise and only get the deals that everyone wants.',
    icon: "mdi:filter",
  },
  {
    name: 'Instant Notifications',
    description:
      'Using the latest in technology such as webooks and ntfy we let you decide how you want to be notified of new deals.',
    icon: "mdi:app-notification",
  },
  {
    name: 'API Access',
    description:
      'For those who want to take it to the next level we have a full API that allows you to integrate with your own systems.',
    icon: "ant-design:api-filled",
  },
]

function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Save Your Time</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Spend Time Saving
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We do the hard work so you don't have to, sign up and start saving time today! Don't worry about missing a deal, spend more time saving money!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <Icon icon={feature.icon} className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default Features