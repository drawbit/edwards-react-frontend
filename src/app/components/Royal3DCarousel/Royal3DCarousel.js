import React, { Component } from 'react';
import './style.css';

const Slide = ({ image, label }) => (
    <ul>
        <li data-url="none"></li>
        <li data-thumbnail-path={ image }></li>
    </ul>
);

class Royal3DCarousel extends Component {
    constructor(props) {
        super(props);

        this.slides = props.options.filter(option => option.image);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.carousel = new window.FWDRoyal3DCarousel({
            //required settings
            carouselHolderDivId:"carousel",
            carouselDataListDivId:"playlist",
            displayType:"fixed",
            autoScale:"yes",
            carouselWidth:940,
            carouselHeight:400,
            mainFolderPath:"/Royal3DCarousel/load",
            skinPath:"skin_modern_silver",
            fluidWidthZIndex:100,
                                        
            //main settings
            backgroundColor:"",
            backgroundImagePath:"",
            thumbnailsBackgroundImagePath:"",
            scrollbarBackgroundImagePath:"",
            backgroundRepeat:"repeat-x",
            showDisplay2DAlways:"no",
            carouselStartPosition:"left",
            numberOfThumbnailsToDisplayLeftAndRight:4,
            slideshowDelay:5000,
            autoplay:"no",
            showPrevButton:"no",
            showNextButton:"no",
            showSlideshowButton:"no",
            disableNextAndPrevButtonsOnMobile:"no",
            controlsHeight:31,
            controlsMaxWidth:940,
            showLargeNextAndPrevButtons:"yes",
            largeNextAndPrevButtonsOffest:15,
            slideshowTimerColor:"#777777",
            rightClickContextMenu:"default",
            addKeyboardSupport:"yes",
            useDragAndSwipe:"yes",
                                        
            //thumbnail settings
            thumbnailWidth:420,
            thumbnailHeight:286,
            thumbnailSpaceOffset3D:-22,
            thumbnailSpaceOffset2D:-22,
            thumbnailBorderSize:10,
            thumbnailBackgroundColor:"#666666",
            thumbnailBorderColor1:"#fcfdfd",
            thumbnailBorderColor2:"#e4e4e4",
            transparentImages:"no",
            maxNumberOfThumbnailsOnMobile:13,
            showThumbnailsGradient:"yes",
            showThumbnailsHtmlContent:"no",
            showText:"no",
            showTextBackgroundImage:"yes",
            showThumbnailBoxShadow:"yes",
            thumbnailBoxShadowCss:"0px 2px 2px #555555",
            showReflection:"no",		
            showScrollbar:"no",
            showComboBox:"no",
            showBulletsNavigation:"yes",
            bulletsBackgroundNormalColor1: "#332527",
            bulletsBackgroundNormalColor2: "#332527",
            bulletsBackgroundSelectedColor1: "#ffffff",
            bulletsBackgroundSelectedColor2: "#ffffff",
            bulletsNormalRadius: 8,
            bulletsSelectedRadius: 8,
            spaceBetweenBullets: 15,
            bulletsOffset: 14
        });

        this.carousel.addListener(window.FWDRoyal3DCarousel.THUMB_CHANGE, this.onChange);
        this.carousel.addListener(window.FWDRoyal3DCarousel.IS_API_READY, this.onChange);
    }

    componentWillUnmount() {
        this.carousel.destroy();
        this.carousel.removeListener(window.FWDRoyal3DCarousel.THUMB_CHANGE, this.onChange);
        this.carousel.removeListener(window.FWDRoyal3DCarousel.IS_API_READY, this.onChange);
    }

    render() {
        return (
            <div>
                <div id="carousel" className="carousel"></div>
                <div id="playlist" style={ { display: "none" } }>
                    <div data-cat="Category one">
                        {
                            this.slides.map((option, index) => (<Slide {...option } key={ index } />))
                        }
                    </div>
                </div>
			</div>
        )
    }

    onChange() {
        const slide = this.slides[this.carousel.getCurrentThumbId()];
        const { onSelect } = this.props;
        onSelect(slide);
    }
}

export default Royal3DCarousel;
