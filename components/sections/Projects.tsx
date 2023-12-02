"use client";
import styled from 'styled-components';

export default function Projects() {


    return (
        <div>
            <p className='text-white text-2xl sm:text-4xl mt-28 pb-6'>Here Is What I Have Worked On</p>
            <div className="mb-32 grid text-center gap-3 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">

                <a
                    href="https://fitpalai.com"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Meal plan generator using the Open AI API. Built usign NextJS, NodeJS, Typescript, React, HTML, CSS
                    </p>
                    <h2 className={`my-3 text-2xl font-semibold`}>
                        FitpalAI{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <div className='grid lg:grid-cols-3 gap-1 '>
                        <div className={`py-1 px-1 flex justify-center shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[12px] border-blue btn-primary`}>Primary</div>
                        <div className={`py-1 px-1 flex justify-center shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[12px] border-blue btn-primary`}>Primary</div>
                        <div className={`py-1 px-1 flex justify-center shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[12px] border-blue btn-primary`}>Primary</div>
                    </div>
                </a>

                <a
                    href="https://fitpalai.com"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Meal plan generator using the Open AI API. Built usign NextJS, NodeJS, Typescript, React, HTML, CSS
                    </p>
                    <h2 className={`my-3 text-2xl font-semibold`}>
                        FitpalAI{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <div className='grid lg:grid-cols-3 gap-1 '>
                        <div className={`py-1 px-2 flex items-center shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[12px] border-blue btn-primary`}>Primary</div>
                        <div className={`py-1 px-2 shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[15px] border-blue btn-primary`}>Primary</div>
                        <div className={`py-1 px-2 shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[15px] border-blue btn-primary`}>Primary</div>
                    </div>
                </a>


                <a
                    href="https://fitpalai.com"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Meal plan generator using the Open AI API. Built usign NextJS, NodeJS, Typescript, React, HTML, CSS
                    </p>
                    <h2 className={`my-3 text-2xl font-semibold`}>
                        FitpalAI{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <div className='grid lg:grid-cols-3 gap-1 '>
                        <div className={`py-1 px-2 flex items-center shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[12px] border-blue btn-primary`}>Primary</div>
                        <div className={`py-1 px-2 shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[15px] border-blue btn-primary`}>Primary</div>
                        <div className={`py-1 px-2 shadow-md no-underline w-full rounded-full bg-blue-600 text-white font-sans font-semibold text-[15px] border-blue btn-primary`}>Primary</div>
                    </div>
                </a>

            </div>
        </div>
    );

}
