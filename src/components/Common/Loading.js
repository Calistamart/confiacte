import '../../styles/loading.css'

const Loading = ({ isLoading }) => {
    return (
        <div class={`overlay ${isLoading ? 'visible' : ''}`}>
            <div class="overlay__inner">
                <div class="overlay__content"><span class="spinner"></span></div>
            </div>
        </div>
    )
}

export default Loading;