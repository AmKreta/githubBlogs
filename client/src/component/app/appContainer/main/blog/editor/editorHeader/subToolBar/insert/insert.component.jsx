import React from 'react';
import './insert.styles.scss'

//importing icons
import { AiOutlineLink, AiOutlineUpload, AiFillYoutube } from 'react-icons/ai';
import { BsFillImageFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { ImEmbed2 } from 'react-icons/im';


//import util
import element from '../../../util/element.class';

class Insert extends React.PureComponent {

    imageUploadRef = React.createRef();
    videoUploadRef = React.createRef();

    insertImageLink = (e) => {
        let link = prompt('paste link of the image');
        link && element('image', link);
    }

    insertImageUpload = () => {

    }

    insertVideoLink = (e) => {
        let link = prompt('paste link of the video');
        link && element('video', link);
    }

    insertVideoUpload = () => {

    }

    embed = (e) => {
        let link = prompt('paste link of the embed');
        link && element('embed', link);
    }

    insertYoutubeVideo = e => {
        let link = prompt('add youtube embed link');
        link && element('youtubeVideo', link);
    }

    render() {
        return (
            <div className="primary text subToolbar insert">
                <div className='headerToolBarTools' style={{ position: 'relative' }}>
                    <BsFillImageFill />
                    <p>image</p>
                    <ul className='headerImageDropDown'>
                        <li onClick={() => this.imageUploadRef.current.click()}><AiOutlineUpload /> upload</li>
                        <li onClick={this.insertImageLink}><AiOutlineLink /> url</li>
                    </ul>
                    <input type='file' style={{ display: 'none' }} ref={this.imageUploadRef} />
                </div>
                <div className='headerToolBarTools'>
                    <BsFillCameraVideoFill />
                    <p>video</p>
                    <ul className='headerImageDropDown'>
                        <li onClick={() => this.videoUploadRef.current.click()}><AiOutlineUpload /> upload</li>
                        <li onClick={this.insertVideoLink}><AiOutlineLink /> url</li>
                        <li onClick={this.insertYoutubeVideo}><AiFillYoutube color='red' />youtube</li>
                    </ul>
                    <input type='file' style={{ display: 'none' }} ref={this.videoUploadRef} />
                </div>
                <div>
                    <ImEmbed2 />
                    <p onClick={this.embed}>embed</p>
                </div>
            </div>
        );
    }
}

export default Insert;