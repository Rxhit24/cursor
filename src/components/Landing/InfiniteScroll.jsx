function InfiniteScroller() {
    return (
        <>
            <div className="border-2 overflow-hidden border-secondary" style={{mask:'linear-gradient(90deg, transparent, white 8%, white 92%, transparent)'}}>
                <ul className="flex p-[20px_0px] animate-[scroll_30s_linear_infinite]">
                    {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Next.js",
                        "Vue",
                        "Spring",
                        "Laravel",
                        "SPA",
                        "Visuals",
                        "Animation",
                    ].map((item, index) => {
                        return (
                            <li key={index} className="p-[10px_20px] m-[0px_10px] rounded-[10px] cursor-pointer bg-secondary text-primary ">
                                {item}
                            </li>
                        );
                    })}
                    {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Next.js",
                        "Vue",
                        "Spring",
                        "Laravel",
                        "SPA",
                        "Visuals",
                        "Animation",
                    ].map((item, index) => {
                        return (
                            <li key={index} className="p-[10px_20px] m-[0px_10px] rounded-[10px] cursor-pointer bg-secondary text-primary">
                                {item}
                            </li>
                        );
                    })}
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">HTML</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">CSS</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">JavaScript</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">React</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">Next.js</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">Vue</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">Spring</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">Laravel</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">SPA</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">Visuals</li>
                    <li className="p-[10px_20px] m-[0px_10px] rounded-[10px] bg-secondary text-primary">Animation</li>
                </ul>
            </div>
        </>
    );
}

export default InfiniteScroller;
