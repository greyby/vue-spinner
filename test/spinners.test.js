import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import PulseLoader from '../src/PulseLoader.vue'
import GridLoader from '../src/GridLoader.vue'
import ClipLoader from '../src/ClipLoader.vue'
import RiseLoader from '../src/RiseLoader.vue'
import BeatLoader from '../src/BeatLoader.vue'
import SyncLoader from '../src/SyncLoader.vue'
import RotateLoader from '../src/RotateLoader.vue'
import FadeLoader from '../src/FadeLoader.vue'
import PacmanLoader from '../src/PacmanLoader.vue'
import SquareLoader from '../src/SquareLoader.vue'
import ScaleLoader from '../src/ScaleLoader.vue'
import SkewLoader from '../src/SkewLoader.vue'
import MoonLoader from '../src/MoonLoader.vue'
import RingLoader from '../src/RingLoader.vue'
import BounceLoader from '../src/BounceLoader.vue'
import DotLoader from '../src/DotLoader.vue'

const spinners = [
    { name: 'PulseLoader', component: PulseLoader, animClass: 'v-pulse', count: 3 },
    { name: 'GridLoader', component: GridLoader, animClass: 'v-grid', count: 9 },
    { name: 'ClipLoader', component: ClipLoader, animClass: 'v-clip', count: 1 },
    { name: 'RiseLoader', component: RiseLoader, animClass: 'v-rise', count: 5 },
    { name: 'BeatLoader', component: BeatLoader, animClass: 'v-beat', count: 3 },
    { name: 'SyncLoader', component: SyncLoader, animClass: 'v-sync', count: 3 },
    { name: 'RotateLoader', component: RotateLoader, animClass: 'v-rotate', count: 1 },
    { name: 'FadeLoader', component: FadeLoader, animClass: 'v-fade', count: 8 },
    { name: 'PacmanLoader', component: PacmanLoader, animClass: 'v-pacman', count: 5 },
    { name: 'SquareLoader', component: SquareLoader, animClass: 'v-square', count: 1 },
    { name: 'ScaleLoader', component: ScaleLoader, animClass: 'v-scale', count: 5 },
    { name: 'SkewLoader', component: SkewLoader, animClass: 'v-skew', count: 1 },
    { name: 'MoonLoader', component: MoonLoader, animClass: 'v-moon', count: 3 },
    { name: 'RingLoader', component: RingLoader, animClass: 'v-ring', count: 1 },
    { name: 'BounceLoader', component: BounceLoader, animClass: 'v-bounce', count: 2 },
    { name: 'DotLoader', component: DotLoader, animClass: 'v-dot', count: 2 },
]

describe.each(spinners)('$name', ({ component, animClass, count }) => {
    it('renders when loading is true', () => {
        const wrapper = mount(component, { props: { loading: true } })
        expect(wrapper.find('.v-spinner').isVisible()).toBe(true)
    })

    it('hides when loading is false', () => {
        const wrapper = mount(component, { props: { loading: false } })
        expect(wrapper.find('.v-spinner').attributes('style')).toContain('display: none')
    })

    it(`renders ${count} animated element(s) with class "${animClass}"`, () => {
        const wrapper = mount(component, { props: { loading: true } })
        const elements = wrapper.findAll(`.${animClass}`)
        expect(elements.length).toBeGreaterThanOrEqual(count)
    })

    it('applies custom color', () => {
        const wrapper = mount(component, {
            props: { loading: true, color: '#ff0000' }
        })
        const html = wrapper.html()
        // Color should appear somewhere in the rendered output (inline styles)
        expect(html).toContain('#ff0000')
    })
})

// Additional prop-specific tests

describe('ScaleLoader', () => {
    it('accepts height and width props', () => {
        const wrapper = mount(ScaleLoader, {
            props: { height: '50px', width: '8px' }
        })
        const el = wrapper.find('.v-scale')
        expect(el.attributes('style')).toContain('height: 50px')
        expect(el.attributes('style')).toContain('width: 8px')
    })
})

describe('FadeLoader', () => {
    it('accepts height and width props', () => {
        const wrapper = mount(FadeLoader, {
            props: { height: '20px', width: '8px' }
        })
        const el = wrapper.find('.v-fade')
        expect(el.attributes('style')).toContain('height: 20px')
        expect(el.attributes('style')).toContain('width: 8px')
    })
})

describe('PulseLoader', () => {
    it('applies custom size', () => {
        const wrapper = mount(PulseLoader, {
            props: { size: '30px' }
        })
        const el = wrapper.find('.v-pulse')
        expect(el.attributes('style')).toContain('width: 30px')
        expect(el.attributes('style')).toContain('height: 30px')
    })
})

describe('GridLoader', () => {
    it('renders 9 grid items for 3x3 grid', () => {
        const wrapper = mount(GridLoader, { props: { loading: true } })
        expect(wrapper.findAll('.v-grid').length).toBe(9)
    })
})

describe('loading prop defaults to true', () => {
    it('shows spinner without explicit loading prop', () => {
        const wrapper = mount(PulseLoader)
        expect(wrapper.find('.v-spinner').isVisible()).toBe(true)
    })
})
