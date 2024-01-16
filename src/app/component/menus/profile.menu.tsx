import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

import { FaChevronDown } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";


const solutions = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#' },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
]
const callsToAction = [
    { name: 'Watch demo', href: '#' },
    { name: 'Contact sales', href: '#' },
]

const ProfileMenu = () => {
    return (

        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex items-center transition duration-200 ease-in-out bg-transparent bg-slate-50 bg-opacity-10 text-blue-700 font-semibold hover:bg-slate-50 hover:bg-opacity-20 py-2 px-4 hover:border-transparent  rounded-xl relative" style={{ height: '48px', minWidth: '48px' }}>
                    <HiOutlineUserCircle size={25} color='white' />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    Profile
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >

                                    Watchlist
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >

                                    Settings
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >

                                    Language
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    NightMode
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ProfileMenu