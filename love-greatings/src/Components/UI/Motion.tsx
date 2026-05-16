import { motion } from "framer-motion";

type MotionProps = {
    children: React.ReactNode;
};

export function FadeUp({
    children,
}: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1}}>
                {children}
            </motion.div>
    );
}

export function FadeRight({
    children,
}: MotionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100}}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 1}}
            >
                {children}
        </motion.div>
    )
}