import React from 'react'

export default function trackLecture() {

    const Controller = () => {
        (function() {

            // VARIABLES
            const timeline = document.querySelector(".timeline ol"),
                elH = document.querySelectorAll(".timeline li > div"),
                arrows = document.querySelectorAll(".timeline .arrows .arrow"),
                arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
                arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
                firstItem = document.querySelector(".timeline li:first-child"),
                lastItem = document.querySelector(".timeline li:last-child"),
                xScrolling = 280,
                disabledClass = "disabled";

            // START
            window.addEventListener("load", init);

            function init() {
                setEqualHeights(elH);
                animateTl(xScrolling, arrows, timeline);
                setSwipeFn(timeline, arrowPrev, arrowNext);
                setKeyboardFn(arrowPrev, arrowNext);
            }

            // SET EQUAL HEIGHTS
            function setEqualHeights(el) {
                let counter = 0;
                for (let i = 0; i < el.length; i++) {
                    const singleHeight = el[i].offsetHeight;

                    if (counter < singleHeight) {
                        counter = singleHeight;
                    }
                }

                for (let i = 0; i < el.length; i++) {
                    el[i].style.height = `${counter}px`;
                }
            }

            // CHECK IF AN ELEMENT IS IN VIEWPORT
            // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            // SET STATE OF PREV/NEXT ARROWS
            function setBtnState(el, flag) {
                if (flag) {
                    el.classList.add(disabledClass);
                } else {
                    if (el.classList.contains(disabledClass)) {
                        el.classList.remove(disabledClass);
                    }
                    el.disabled = false;
                }
            }

            // ANIMATE TIMELINE
            function animateTl(scrolling, el, tl) {
                let counter = 0;
                for (let i = 0; i < el.length; i++) {
                    el[i].addEventListener("click", function() {
                        if (!arrowPrev.disabled) {
                            arrowPrev.disabled = true;
                        }
                        if (!arrowNext.disabled) {
                            arrowNext.disabled = true;
                        }
                        const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
                        if (counter === 0) {
                            tl.style.transform = `translateX(-${scrolling}px)`;
                        } else {
                            const tlStyle = getComputedStyle(tl);
                            // add more browser prefixes if needed here
                            const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
                            const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
                            tl.style.transform = `translateX(${values}px)`;
                        }

                        setTimeout(() => {
                            isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
                            isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
                        }, 1100);

                        counter++;
                    });
                }
            }

            // ADD SWIPE SUPPORT FOR TOUCH DEVICES
            function setSwipeFn(tl, prev, next) {
                const hammer = new Hammer(tl);
                hammer.on("swipeleft", () => next.click());
                hammer.on("swiperight", () => prev.click());
            }

            // ADD BASIC KEYBOARD FUNCTIONALITY
            function setKeyboardFn(prev, next) {
                document.addEventListener("keydown", (e) => {
                    if ((e.which === 37) || (e.which === 39)) {
                        const timelineOfTop = timeline.offsetTop;
                        const y = window.pageYOffset;
                        if (timelineOfTop !== y) {
                            window.scrollTo(0, timelineOfTop);
                        }
                        if (e.which === 37) {
                            prev.click();
                        } else if (e.which === 39) {
                            next.click();
                        }
                    }
                });
            }

        })();
    }
    return (
        <section>
        <div className="container-fluid">
            <div className="col-xl-10 col-sm-10 ml-auto">
                <div className="row justify-content-center">
                    <!-- <div className="col-xl-12 col-sm-6 p-1 "> -->
                    <div className="card card-common">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <section className="timeline">
                                    <ol>
                                        
                                        <li>
                                            <div className="div">
                                                <small className="text-warning"><time>May 27, 2021</time></small>
                                                <p className="text-white">Introduction to the subject</p><br>
                                                <a href="/media/dbCreds.txt"><button className="btn btn-outline-warning btn-sm" type="button">View Notes</button></a>
                                            </div>

                                        </li>
                                        
                                    </ol>

                                    <div className="arrows">
                                        <button className="arrow arrow__prev">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow">
                            </button>
                                        <button className="arrow arrow__next">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow">
                            </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>

       
        Controller();


    </section>

    )
}
