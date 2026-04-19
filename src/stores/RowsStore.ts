import { defineStore } from 'pinia'

interface RowItem {
    icon: string
    text: string
    info?: string
}

export const useRowsStore = defineStore('rows', () => {
    const maxRowsLength: number[] = [];
    const rows: Record<string, RowItem[]> = {
        home: [
            {
                icon: 'power',
                text: 'Power'
            },
            {
                icon: 'adduser',
                text: 'Add User'
            },
            {
                icon: 'user',
                text: 'Amin'
            },
        ],
        settings: [
            {
                icon: 'update',
                text: 'Search Updates',
                info: 'Update the VS3 system'
            },
            {
                icon: 'game',
                text: 'Game Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'video',
                text: 'Video Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'music',
                text: 'Music Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'chat',
                text: 'Chat Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'system',
                text: 'System Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'background',
                text: 'Theme Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'date-time',
                text: 'Date & Time Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'power',
                text: 'Power Save Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'accessory',
                text: 'Accessory Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'printer',
                text: 'Printer Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'sound',
                text: 'Sound Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'screen',
                text: 'Display Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'security',
                text: 'Security Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'remote',
                text: 'Remote Play Settings',
                info: 'Adjust settings for this VS3 system'
            },
            {
                icon: 'internet',
                text: 'Network Settings',
                info: 'Adjust settings for this VS3 system'
            }
        ],
        photos: [
            {
                icon: 'mediaserver',
                text: 'Search For Media Servers'
            },
            {
                icon: 'playlist',
                text: 'Playlists'
            }
        ],
        musics: [
            {
                icon: 'mediaserver',
                text: 'Search For Media Servers'
            },
            {
                icon: 'playlist',
                text: 'Playlists'
            }
        ],
        videos: [
            {
                icon: 'folder',
                text: 'BD Data Utility'
            },
            {
                icon: 'mediaserver',
                text: 'Search For Media Servers'
            }
        ],
        games: [
            {
                icon: 'folder',
                text: 'Game Data Utility'
            },
            {
                icon: 'memcard',
                text: 'Memory Card Utility (PS/PS2)'
            },
            {
                icon: 'gamefolder',
                text: 'Saved Data Utility'
            },
            {
                icon: 'trophy',
                text: 'Trophy Collection'
            },
            {
                icon: 'disc',
                text: 'Jak 3',
            },
        ],
        internet: [
            {
                icon: 'manual',
                text: 'Online Instruction Manuals'
            },
            {
                icon: 'remoteplay',
                text: 'Remote Play'
            },
            {
                icon: 'browser',
                text: 'Internet Browser'
            },
            {
                icon: 'download',
                text: 'Download Management'
            }
        ],
        'playstation network': [
            {
                icon: 'account',
                text: 'Account Management'
            },
            {
                icon: 'psplus',
                text: 'PlayStation Plus'
            },
            {
                icon: 'pshome',
                text: 'PlayStation Home'
            },
            {
                icon: 'psstore',
                text: 'Playstation Store'
            }
        ],
        contacts: [
            {
                icon: 'block',
                text: 'Block List'
            },
            {
                icon: 'addfriend',
                text: 'Add a friend'
            },
            {
                icon: 'met',
                text: 'Players Met'
            },
            {
                icon: 'newmessage',
                text: 'Start New Chat'
            },
            {
                icon: 'chatroom',
                text: 'Chat Room'
            },
            {
                icon: 'messagebox',
                text: 'Message Box'
            },
            {
                icon: 'friend',
                text: 'That old friend'
            }
        ]
    }

    return {
        rows,
        maxRowsLength
    }
})
