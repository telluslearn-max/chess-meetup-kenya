import React from 'react'

interface ProgressStepperProps {
    currentStep: number
    totalSteps: number
    stepLabels?: string[]
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({
    currentStep,
    totalSteps,
    stepLabels
}) => {
    return (
        <div className="w-full">
            {/* Progress Bar */}
            <div className="relative h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
                <div
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 rounded-full"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-between">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Step {currentStep} of {totalSteps}
                </p>
                {stepLabels && stepLabels[currentStep - 1] && (
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                        {stepLabels[currentStep - 1]}
                    </p>
                )}
            </div>
        </div>
    )
}
