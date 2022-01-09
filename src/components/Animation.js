import React from 'react'
import '../styles/Animation.css'

const Animation = () => {
    const logo = document.querySelectorAll('#logo path');
    // console.log(logo);

    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
    }



    return (
        <>
        <div id='bgc'>

            <div className='IMG'>
            
        <svg  id='logo' width="707" height="122" viewBox="0 0 707 122" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2_6)">
<mask id="path-1-outside-1_2_6" maskUnits="userSpaceOnUse" x="4.06458" y="0.335999" width="699" height="113" fill="black">
<rect fill="white" x="4.06458" y="0.335999" width="699" height="113"/>
<path d="M76.1686 36.008C76.1686 44.36 73.2886 51.32 67.5286 56.888C61.8646 62.36 53.1766 65.096 41.4646 65.096H22.1686V107H9.06458V6.632H41.4646C52.7926 6.632 61.3846 9.368 67.2406 14.84C73.1926 20.312 76.1686 27.368 76.1686 36.008ZM41.4646 54.296C48.7606 54.296 54.1366 52.712 57.5926 49.544C61.0486 46.376 62.7766 41.864 62.7766 36.008C62.7766 23.624 55.6726 17.432 41.4646 17.432H22.1686V54.296H41.4646Z"/>
<path d="M145.303 107L121.399 65.96H105.559V107H92.4552V6.632H124.855C132.439 6.632 138.823 7.928 144.007 10.52C149.287 13.112 153.223 16.616 155.815 21.032C158.407 25.448 159.703 30.488 159.703 36.152C159.703 43.064 157.687 49.16 153.655 54.44C149.719 59.72 143.767 63.224 135.799 64.952L160.999 107H145.303ZM105.559 55.448H124.855C131.959 55.448 137.287 53.72 140.839 50.264C144.391 46.712 146.167 42.008 146.167 36.152C146.167 30.2 144.391 25.592 140.839 22.328C137.383 19.064 132.055 17.432 124.855 17.432H105.559V55.448Z"/>
<path d="M225.569 108.008C216.257 108.008 207.761 105.848 200.081 101.528C192.401 97.112 186.305 91.016 181.793 83.24C177.377 75.368 175.169 66.536 175.169 56.744C175.169 46.952 177.377 38.168 181.793 30.392C186.305 22.52 192.401 16.424 200.081 12.104C207.761 7.688 216.257 5.48 225.569 5.48C234.977 5.48 243.521 7.688 251.201 12.104C258.881 16.424 264.929 22.472 269.345 30.248C273.761 38.024 275.969 46.856 275.969 56.744C275.969 66.632 273.761 75.464 269.345 83.24C264.929 91.016 258.881 97.112 251.201 101.528C243.521 105.848 234.977 108.008 225.569 108.008ZM225.569 96.632C232.577 96.632 238.865 95 244.433 91.736C250.097 88.472 254.513 83.816 257.681 77.768C260.945 71.72 262.577 64.712 262.577 56.744C262.577 48.68 260.945 41.672 257.681 35.72C254.513 29.672 250.145 25.016 244.577 21.752C239.009 18.488 232.673 16.856 225.569 16.856C218.465 16.856 212.129 18.488 206.561 21.752C200.993 25.016 196.577 29.672 193.313 35.72C190.145 41.672 188.561 48.68 188.561 56.744C188.561 64.712 190.145 71.72 193.313 77.768C196.577 83.816 200.993 88.472 206.561 91.736C212.225 95 218.561 96.632 225.569 96.632Z"/>
<path d="M343.812 6.632V80.792C343.812 89.048 341.268 95.672 336.18 100.664C331.092 105.56 324.372 108.008 316.02 108.008C307.572 108.008 300.804 105.512 295.716 100.52C290.628 95.432 288.084 88.52 288.084 79.784H301.188C301.284 84.68 302.532 88.664 304.932 91.736C307.428 94.808 311.124 96.344 316.02 96.344C320.916 96.344 324.564 94.904 326.964 92.024C329.364 89.048 330.564 85.304 330.564 80.792V6.632H343.812Z"/>
<path d="M382.731 17.288V50.84H419.307V61.64H382.731V96.2H423.627V107H369.627V6.488H423.627V17.288H382.731Z"/>
<path d="M438.559 56.744C438.559 46.952 440.767 38.168 445.183 30.392C449.599 22.52 455.599 16.376 463.183 11.96C470.863 7.544 479.359 5.336 488.671 5.336C499.615 5.336 509.167 7.976 517.327 13.256C525.487 18.536 531.439 26.024 535.183 35.72H519.487C516.703 29.672 512.671 25.016 507.391 21.752C502.207 18.488 495.967 16.856 488.671 16.856C481.663 16.856 475.375 18.488 469.807 21.752C464.239 25.016 459.871 29.672 456.703 35.72C453.535 41.672 451.951 48.68 451.951 56.744C451.951 64.712 453.535 71.72 456.703 77.768C459.871 83.72 464.239 88.328 469.807 91.592C475.375 94.856 481.663 96.488 488.671 96.488C495.967 96.488 502.207 94.904 507.391 91.736C512.671 88.472 516.703 83.816 519.487 77.768H535.183C531.439 87.368 525.487 94.808 517.327 100.088C509.167 105.272 499.615 107.864 488.671 107.864C479.359 107.864 470.863 105.704 463.183 101.384C455.599 96.968 449.599 90.872 445.183 83.096C440.767 75.32 438.559 66.536 438.559 56.744Z"/>
<path d="M616.466 6.632V17.288H589.106V107H576.002V17.288H548.498V6.632H616.466Z"/>
<path d="M664.42 108.008C657.796 108.008 651.844 106.856 646.564 104.552C641.38 102.152 637.3 98.888 634.324 94.76C631.348 90.536 629.812 85.688 629.716 80.216H643.684C644.164 84.92 646.084 88.904 649.444 92.168C652.9 95.336 657.892 96.92 664.42 96.92C670.66 96.92 675.556 95.384 679.108 92.312C682.756 89.144 684.58 85.112 684.58 80.216C684.58 76.376 683.524 73.256 681.412 70.856C679.3 68.456 676.66 66.632 673.492 65.384C670.324 64.136 666.052 62.792 660.676 61.352C654.052 59.624 648.724 57.896 644.692 56.168C640.756 54.44 637.348 51.752 634.468 48.104C631.684 44.36 630.292 39.368 630.292 33.128C630.292 27.656 631.684 22.808 634.468 18.584C637.252 14.36 641.14 11.096 646.132 8.792C651.22 6.488 657.028 5.336 663.556 5.336C672.964 5.336 680.644 7.688 686.596 12.392C692.644 17.096 696.052 23.336 696.82 31.112H682.42C681.94 27.272 679.924 23.912 676.372 21.032C672.82 18.056 668.116 16.568 662.26 16.568C656.788 16.568 652.324 18.008 648.868 20.888C645.412 23.672 643.684 27.608 643.684 32.696C643.684 36.344 644.692 39.32 646.708 41.624C648.82 43.928 651.364 45.704 654.34 46.952C657.412 48.104 661.684 49.448 667.156 50.984C673.78 52.808 679.108 54.632 683.14 56.456C687.172 58.184 690.628 60.92 693.508 64.664C696.388 68.312 697.828 73.304 697.828 79.64C697.828 84.536 696.532 89.144 693.94 93.464C691.348 97.784 687.508 101.288 682.42 103.976C677.332 106.664 671.332 108.008 664.42 108.008Z"/>
</mask>
<path d="M76.1686 36.008C76.1686 44.36 73.2886 51.32 67.5286 56.888C61.8646 62.36 53.1766 65.096 41.4646 65.096H22.1686V107H9.06458V6.632H41.4646C52.7926 6.632 61.3846 9.368 67.2406 14.84C73.1926 20.312 76.1686 27.368 76.1686 36.008ZM41.4646 54.296C48.7606 54.296 54.1366 52.712 57.5926 49.544C61.0486 46.376 62.7766 41.864 62.7766 36.008C62.7766 23.624 55.6726 17.432 41.4646 17.432H22.1686V54.296H41.4646Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
<path d="M145.303 107L121.399 65.96H105.559V107H92.4552V6.632H124.855C132.439 6.632 138.823 7.928 144.007 10.52C149.287 13.112 153.223 16.616 155.815 21.032C158.407 25.448 159.703 30.488 159.703 36.152C159.703 43.064 157.687 49.16 153.655 54.44C149.719 59.72 143.767 63.224 135.799 64.952L160.999 107H145.303ZM105.559 55.448H124.855C131.959 55.448 137.287 53.72 140.839 50.264C144.391 46.712 146.167 42.008 146.167 36.152C146.167 30.2 144.391 25.592 140.839 22.328C137.383 19.064 132.055 17.432 124.855 17.432H105.559V55.448Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
<path d="M225.569 108.008C216.257 108.008 207.761 105.848 200.081 101.528C192.401 97.112 186.305 91.016 181.793 83.24C177.377 75.368 175.169 66.536 175.169 56.744C175.169 46.952 177.377 38.168 181.793 30.392C186.305 22.52 192.401 16.424 200.081 12.104C207.761 7.688 216.257 5.48 225.569 5.48C234.977 5.48 243.521 7.688 251.201 12.104C258.881 16.424 264.929 22.472 269.345 30.248C273.761 38.024 275.969 46.856 275.969 56.744C275.969 66.632 273.761 75.464 269.345 83.24C264.929 91.016 258.881 97.112 251.201 101.528C243.521 105.848 234.977 108.008 225.569 108.008ZM225.569 96.632C232.577 96.632 238.865 95 244.433 91.736C250.097 88.472 254.513 83.816 257.681 77.768C260.945 71.72 262.577 64.712 262.577 56.744C262.577 48.68 260.945 41.672 257.681 35.72C254.513 29.672 250.145 25.016 244.577 21.752C239.009 18.488 232.673 16.856 225.569 16.856C218.465 16.856 212.129 18.488 206.561 21.752C200.993 25.016 196.577 29.672 193.313 35.72C190.145 41.672 188.561 48.68 188.561 56.744C188.561 64.712 190.145 71.72 193.313 77.768C196.577 83.816 200.993 88.472 206.561 91.736C212.225 95 218.561 96.632 225.569 96.632Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
<path d="M343.812 6.632V80.792C343.812 89.048 341.268 95.672 336.18 100.664C331.092 105.56 324.372 108.008 316.02 108.008C307.572 108.008 300.804 105.512 295.716 100.52C290.628 95.432 288.084 88.52 288.084 79.784H301.188C301.284 84.68 302.532 88.664 304.932 91.736C307.428 94.808 311.124 96.344 316.02 96.344C320.916 96.344 324.564 94.904 326.964 92.024C329.364 89.048 330.564 85.304 330.564 80.792V6.632H343.812Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
<path d="M382.731 17.288V50.84H419.307V61.64H382.731V96.2H423.627V107H369.627V6.488H423.627V17.288H382.731Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
<path d="M438.559 56.744C438.559 46.952 440.767 38.168 445.183 30.392C449.599 22.52 455.599 16.376 463.183 11.96C470.863 7.544 479.359 5.336 488.671 5.336C499.615 5.336 509.167 7.976 517.327 13.256C525.487 18.536 531.439 26.024 535.183 35.72H519.487C516.703 29.672 512.671 25.016 507.391 21.752C502.207 18.488 495.967 16.856 488.671 16.856C481.663 16.856 475.375 18.488 469.807 21.752C464.239 25.016 459.871 29.672 456.703 35.72C453.535 41.672 451.951 48.68 451.951 56.744C451.951 64.712 453.535 71.72 456.703 77.768C459.871 83.72 464.239 88.328 469.807 91.592C475.375 94.856 481.663 96.488 488.671 96.488C495.967 96.488 502.207 94.904 507.391 91.736C512.671 88.472 516.703 83.816 519.487 77.768H535.183C531.439 87.368 525.487 94.808 517.327 100.088C509.167 105.272 499.615 107.864 488.671 107.864C479.359 107.864 470.863 105.704 463.183 101.384C455.599 96.968 449.599 90.872 445.183 83.096C440.767 75.32 438.559 66.536 438.559 56.744Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
<path d="M616.466 6.632V17.288H589.106V107H576.002V17.288H548.498V6.632H616.466Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
<path d="M664.42 108.008C657.796 108.008 651.844 106.856 646.564 104.552C641.38 102.152 637.3 98.888 634.324 94.76C631.348 90.536 629.812 85.688 629.716 80.216H643.684C644.164 84.92 646.084 88.904 649.444 92.168C652.9 95.336 657.892 96.92 664.42 96.92C670.66 96.92 675.556 95.384 679.108 92.312C682.756 89.144 684.58 85.112 684.58 80.216C684.58 76.376 683.524 73.256 681.412 70.856C679.3 68.456 676.66 66.632 673.492 65.384C670.324 64.136 666.052 62.792 660.676 61.352C654.052 59.624 648.724 57.896 644.692 56.168C640.756 54.44 637.348 51.752 634.468 48.104C631.684 44.36 630.292 39.368 630.292 33.128C630.292 27.656 631.684 22.808 634.468 18.584C637.252 14.36 641.14 11.096 646.132 8.792C651.22 6.488 657.028 5.336 663.556 5.336C672.964 5.336 680.644 7.688 686.596 12.392C692.644 17.096 696.052 23.336 696.82 31.112H682.42C681.94 27.272 679.924 23.912 676.372 21.032C672.82 18.056 668.116 16.568 662.26 16.568C656.788 16.568 652.324 18.008 648.868 20.888C645.412 23.672 643.684 27.608 643.684 32.696C643.684 36.344 644.692 39.32 646.708 41.624C648.82 43.928 651.364 45.704 654.34 46.952C657.412 48.104 661.684 49.448 667.156 50.984C673.78 52.808 679.108 54.632 683.14 56.456C687.172 58.184 690.628 60.92 693.508 64.664C696.388 68.312 697.828 73.304 697.828 79.64C697.828 84.536 696.532 89.144 693.94 93.464C691.348 97.784 687.508 101.288 682.42 103.976C677.332 106.664 671.332 108.008 664.42 108.008Z" stroke="black" stroke-width="10" shape-rendering="crispEdges" mask="url(#path-1-outside-1_2_6)"/>
</g>
<defs>
<filter id="filter0_d_2_6" x="0.0645752" y="0.335999" width="706.763" height="120.672" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_6"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_6" result="shape"/>
</filter>
</defs>
</svg>
            </div>
        </div>
        </>
    )
}

export default Animation

