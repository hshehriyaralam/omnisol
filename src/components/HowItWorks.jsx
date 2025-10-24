
const HowItWorks = () => {
    return (
        <div className='container'>
            <h4>Simply with AI</h4>
            <h2>How It Works</h2>
            <p>We don’t do guesswork. We build intelligence — step by step.</p>

            <div className="flex">
                <div className="bg-gray">
                    <h3>Discover</h3>
                    <p>We map your workflows, pain points, and potential.</p>
                    <img src="/discover.png" alt="Discover" />
                </div>
                <div className="bg-gray">
                    <h3>Design</h3>
                    <p>Rapidly prototype to test real-world impact.</p>
                    <img src="/design.png" alt="Design" />
                </div>
                <div className="bg-gray">
                    <h3>Develop</h3>
                    <p> Train and deploy AI models tuned for your business.</p>
                    <img src="/develop.png" alt="Develop" />
                </div>
                <div className="bg-gray">
                    <h3>Refine</h3>
                    <p>Continuously monitor, adapt, and optimize performance.</p>
                    <img src="/refine.png" alt="Refine" />
                </div>
            </div>

        </div>
    )
}

export default HowItWorks
