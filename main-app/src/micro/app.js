import actions from '@/shared/actions'

const apps = [
    {
        name: 'vueApp',
        entry: '//localhost:8000',
        container: '#vue',
        activeRule: '/vue',
        props: {
            actions
        }
    },
    {
        name: 'reactApp',
        entry: '//localhost:9000',
        container: '#react',
        activeRule: '/react'
    }
]

export default apps;
