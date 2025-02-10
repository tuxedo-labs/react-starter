import GridBackground from "./ui/grid-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
    return (
        <div className="bg-[hsl(var(--background))]">
            <GridBackground>
                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <TextGenerateEffect
                            words="Empowering developers worldwide with innovative open-source solutions and professional website & app development services."
                            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
                        />

                        <div className="text-center mt-4 dark:text-gray-400">
                            <p>
                                TuxedoLabs provides developers with the tools and resources they need to create, collaborate, and innovate in the open-source ecosystem. Explore high-quality projects, from development tools, libraries, and frameworks to full-fledged applications.
                            </p>
                        </div>
                    </div>
                </div>
            </GridBackground>
        </div>
    )
}
