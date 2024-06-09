import './ImageList.css'
import ImageShow from './ImageShow'
function ImageList({ images }) {
    const renderesImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />

    })

    return <div className='image-List'>{renderesImages}
    <div><h2>THANK YOU</h2></div>
    </div>
            


}

export default ImageList