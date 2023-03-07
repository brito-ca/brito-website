const icons = {
    menu: (
        <svg
            width='28'
            height='20'
            viewBox='0 0 26 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M5.66667 9.0013H20.3333M2 1.66797H24M2 16.3346H24'
                stroke='#4A5568'
                stroke-width='2.5625'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    ),
    close: (
        <svg
            width='20'
            height='20'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M21.2634 0.736568C21.5789 1.05199 21.5789 1.56339 21.2634 1.87882L1.87882 21.2634C1.56339 21.5789 1.05199 21.5789 0.736568 21.2634C0.421144 20.948 0.421144 20.4366 0.736568 20.1212L20.1212 0.736568C20.4366 0.421144 20.948 0.421144 21.2634 0.736568Z'
                fill='#383F60'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0.736568 0.736568C1.05199 0.421144 1.56339 0.421144 1.87882 0.736568L21.2634 20.1212C21.5789 20.4366 21.5789 20.948 21.2634 21.2634C20.948 21.5789 20.4366 21.5789 20.1212 21.2634L0.736568 1.87882C0.421144 1.56339 0.421144 1.05199 0.736568 0.736568Z'
                fill='#383F60'
            />
        </svg>
    ),
    arrowUp: (
        <svg
            width='50'
            height='50'
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='50' cy='50' r='50' fill='#022777' />
            <path
                d='M52.8284 23.1716C51.2663 21.6095 48.7337 21.6095 47.1716 23.1716L21.7157 48.6274C20.1536 50.1895 20.1536 52.7222 21.7157 54.2843C23.2778 55.8464 25.8105 55.8464 27.3726 54.2843L50 31.6569L72.6274 54.2843C74.1895 55.8464 76.7222 55.8464 78.2843 54.2843C79.8464 52.7222 79.8464 50.1895 78.2843 48.6274L52.8284 23.1716ZM54 73V26H46V73H54Z'
                fill='#F5F5FA'
            />
        </svg>
    ),
    facebook: (
        <svg
            width='65'
            height='65'
            viewBox='0 0 65 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='32.0845' cy='32.9258' r='26.6353' fill='#022777' />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M39.1629 23.5467C38.3328 23.3807 37.2117 23.2567 36.5065 23.2567C34.5972 23.2567 34.4732 24.0868 34.4732 25.415V27.7794H39.246L38.8299 32.6772H34.4732V47.5747H28.4973V32.6772H25.4258V27.7794H28.4973V24.7499C28.4973 20.6002 30.4476 18.2759 35.3444 18.2759C37.0456 18.2759 38.2908 18.5249 39.9091 18.857L39.1629 23.5467Z'
                fill='#F5F5FA'
            />
        </svg>
    ),
    instagram: (
        <svg
            width='65'
            height='65'
            viewBox='0 0 65 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='32.6157' cy='32.9258' r='26.6353' fill='#022777' />
            <path
                d='M32.6179 19.8262C36.885 19.8262 37.3905 19.8426 39.0756 19.9194C40.6338 19.9905 41.48 20.2508 42.0431 20.4697C42.7891 20.7596 43.3214 21.1059 43.8806 21.6651C44.4399 22.2244 44.7862 22.7567 45.0761 23.5027C45.295 24.0658 45.5553 24.912 45.6264 26.4701C45.7032 28.1553 45.7195 28.6607 45.7195 32.9278C45.7195 37.195 45.7032 37.7005 45.6264 39.3856C45.5553 40.9438 45.295 41.7899 45.0761 42.3531C44.7862 43.099 44.4399 43.6314 43.8807 44.1906C43.3214 44.7498 42.7891 45.0962 42.0431 45.3861C41.48 45.6049 40.6338 45.8653 39.0756 45.9363C37.3907 46.0132 36.8853 46.0295 32.6179 46.0295C28.3504 46.0295 27.8451 46.0132 26.1601 45.9363C24.602 45.8653 23.7558 45.6049 23.1926 45.3861C22.4467 45.0962 21.9143 44.7498 21.3551 44.1906C20.7959 43.6314 20.4496 43.099 20.1596 42.3531C19.9408 41.7899 19.6804 40.9438 19.6094 39.3856C19.5325 37.7005 19.5162 37.195 19.5162 32.9278C19.5162 28.6607 19.5325 28.1553 19.6094 26.4701C19.6804 24.912 19.9408 24.0658 20.1596 23.5027C20.4496 22.7567 20.7959 22.2244 21.3551 21.6652C21.9143 21.1059 22.4467 20.7596 23.1926 20.4697C23.7558 20.2508 24.602 19.9905 26.1601 19.9194C27.8453 19.8426 28.3507 19.8262 32.6179 19.8262ZM32.6179 16.9468C28.2777 16.9468 27.7334 16.9652 26.0289 17.0429C24.3279 17.1205 23.1661 17.3907 22.1496 17.7857C21.0987 18.1941 20.2075 18.7406 19.319 19.629C18.4305 20.5175 17.8841 21.4088 17.4757 22.4596C17.0807 23.4762 16.8105 24.6379 16.7329 26.3389C16.6551 28.0434 16.6367 28.5877 16.6367 32.9278C16.6367 37.2681 16.6551 37.8123 16.7329 39.5169C16.8105 41.2179 17.0807 42.3796 17.4757 43.3961C17.8841 44.447 18.4305 45.3382 19.319 46.2267C20.2075 47.1152 21.0987 47.6616 22.1496 48.07C23.1661 48.465 24.3279 48.7352 26.0289 48.8128C27.7334 48.8906 28.2777 48.909 32.6179 48.909C36.9581 48.909 37.5023 48.8906 39.2069 48.8128C40.9079 48.7352 42.0696 48.465 43.0861 48.07C44.137 47.6616 45.0283 47.1152 45.9168 46.2267C46.8052 45.3382 47.3517 44.447 47.7601 43.3961C48.1551 42.3796 48.4253 41.2179 48.5029 39.5169C48.5806 37.8123 48.599 37.2681 48.599 32.9278C48.599 28.5877 48.5806 28.0434 48.5029 26.3389C48.4253 24.6379 48.1551 23.4762 47.7601 22.4596C47.3517 21.4088 46.8052 20.5175 45.9168 19.629C45.0283 18.7406 44.137 18.1941 43.0861 17.7857C42.0696 17.3907 40.9079 17.1205 39.2069 17.0429C37.5023 16.9652 36.9581 16.9468 32.6179 16.9468Z'
                fill='#F5F5FA'
            />
            <path
                d='M32.6323 24.729C28.0999 24.729 24.4258 28.4032 24.4258 32.9355C24.4258 37.4679 28.0999 41.142 32.6323 41.142C37.1647 41.142 40.8389 37.4679 40.8389 32.9355C40.8389 28.4032 37.1647 24.729 32.6323 24.729ZM32.6323 38.2625C29.6903 38.2625 27.3053 35.8776 27.3053 32.9355C27.3053 29.9935 29.6903 27.6085 32.6323 27.6085C35.5744 27.6085 37.9594 29.9935 37.9594 32.9355C37.9594 35.8776 35.5744 38.2625 32.6323 38.2625Z'
                fill='#F5F5FA'
            />
            <path
                d='M43.066 24.3982C43.066 25.4573 42.2073 26.3159 41.1482 26.3159C40.0891 26.3159 39.2305 25.4573 39.2305 24.3982C39.2305 23.3391 40.0891 22.4805 41.1482 22.4805C42.2073 22.4805 43.066 23.3391 43.066 24.3982Z'
                fill='#F5F5FA'
            />
        </svg>
    ),
    linkedin: (
        <svg
            width='65'
            height='65'
            viewBox='0 0 65 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle cx='32.8501' cy='32.9258' r='26.6353' fill='#022777' />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M25.8823 19.9884C25.8823 21.6465 24.6197 22.9885 22.6453 22.9885C20.7478 22.9885 19.4852 21.6465 19.5243 19.9884C19.4852 18.2496 20.7478 16.9468 22.6831 16.9468C24.6197 16.9468 25.8444 18.2496 25.8823 19.9884ZM19.6831 44.6728V25.3585H25.6857V44.6716H19.6831V44.6728Z'
                fill='#F5F5FA'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M30.4947 31.5196C30.4947 29.1105 30.4153 27.0567 30.3359 25.3583H35.5498L35.8269 28.0043H35.9454C36.7354 26.7796 38.7098 24.9248 41.9089 24.9248C45.8578 24.9248 48.82 27.5317 48.82 33.2169V44.6726H42.8174V33.969C42.8174 31.4793 41.9492 29.7821 39.777 29.7821C38.1176 29.7821 37.131 30.9274 36.7366 32.0324C36.5779 32.4281 36.4997 32.98 36.4997 33.5343V44.6726H30.4971V31.5196H30.4947Z'
                fill='#F5F5FA'
            />
        </svg>
    ),
    mail: (
        <svg
            width='20'
            height='16'
            viewBox='0 0 20 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z'
                fill='#022777'
            />
        </svg>
    ),
}

export default icons
