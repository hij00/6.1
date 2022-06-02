(function(){
    const wrapEl = document.querySelector('.wrap')
    const barEl =document.querySelector('.bar')

    const handleBar = () => {
        const scr = window.pageYOffset
        // barEl.style.width = scr + 'px'
        // px값을 넣지 않으면 안 들어감, 스타일 이용할땐 단위를 넣어야함

        // console.log('페이지 전체 높이값: ', wrapEl.offsetHeight)
        // console.log('브라우저 높이값: ', window.innerHeight)
        // console.log('실제 사용할 수 있는 값: ', wrapEl.offsetHeight - window.innerHeight)

        // 스크롤 이벤트를 적용할 땐 퍼센트로 값 구하기
        const useScroll = wrapEl.offsetHeight - window.innerHeight
        // 자식의 픽셀을 퍼센트로 가져오는 법 => 자식 / 부모 * 100
        const per = scr / useScroll *100
        console.log(per)
        barEl.style.width = per + '%'

        // 사용할 스크롤값 : 문서의 높이값 - 브라우저의 높이값
        // (선택자.offsetHeight - window.innerHeight)
        // 사용할 스크롤 퍼센트 처리 : 사용할 스크롤 / 사용할 수 있는 스크롤값 * 100 + '%'
        // (pageYOffset / 계산한 사용할 수 있는 스크롤값 * 100)
    }

    window.addEventListener('scroll', handleBar)

})()