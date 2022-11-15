import chalk from 'chalk'

// Chalk is perfect to test esm/cjs build support since chalk by default does not support cjs.

export function logModuleType() {
  console.log(
    typeof module === 'object' && module.exports
      ? chalk.green('commonjs')
      : chalk.hex('#f8c14a')('esm')
  )
}

logModuleType()
