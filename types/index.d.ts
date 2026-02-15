import { DefineComponent } from 'vue'

interface SpinnerProps {
    /** Show/hide the spinner. Default: true */
    loading?: boolean
    /** Spinner color. Default: '#5dc596' */
    color?: string
    /** Spinner size. Default varies by component */
    size?: string
    /** Margin between elements. Default: '2px' */
    margin?: string
    /** Border radius. Default varies by component */
    radius?: string
}

interface ScaleLoaderProps extends Omit<SpinnerProps, 'size'> {
    /** Bar height. Default: '35px' */
    height?: string
    /** Bar width. Default: '4px' */
    width?: string
}

interface FadeLoaderProps extends Omit<SpinnerProps, 'size'> {
    /** Line height. Default: '15px' */
    height?: string
    /** Line width. Default: '5px' */
    width?: string
}

type SpinnerComponent = DefineComponent<SpinnerProps>
type ScaleLoaderComponent = DefineComponent<ScaleLoaderProps>
type FadeLoaderComponent = DefineComponent<FadeLoaderProps>

export declare const PulseLoader: SpinnerComponent
export declare const GridLoader: SpinnerComponent
export declare const ClipLoader: SpinnerComponent
export declare const RiseLoader: SpinnerComponent
export declare const BeatLoader: SpinnerComponent
export declare const SyncLoader: SpinnerComponent
export declare const RotateLoader: SpinnerComponent
export declare const FadeLoader: FadeLoaderComponent
export declare const PacmanLoader: SpinnerComponent
export declare const SquareLoader: SpinnerComponent
export declare const ScaleLoader: ScaleLoaderComponent
export declare const SkewLoader: SpinnerComponent
export declare const MoonLoader: SpinnerComponent
export declare const RingLoader: SpinnerComponent
export declare const BounceLoader: SpinnerComponent
export declare const DotLoader: SpinnerComponent

declare const VueSpinner: {
    PulseLoader: SpinnerComponent
    GridLoader: SpinnerComponent
    ClipLoader: SpinnerComponent
    RiseLoader: SpinnerComponent
    BeatLoader: SpinnerComponent
    SyncLoader: SpinnerComponent
    RotateLoader: SpinnerComponent
    FadeLoader: FadeLoaderComponent
    PacmanLoader: SpinnerComponent
    SquareLoader: SpinnerComponent
    ScaleLoader: ScaleLoaderComponent
    SkewLoader: SpinnerComponent
    MoonLoader: SpinnerComponent
    RingLoader: SpinnerComponent
    BounceLoader: SpinnerComponent
    DotLoader: SpinnerComponent
}

export default VueSpinner
