// import BigNumber from 'bignumber.js'
// import { useCallback, useEffect, useState } from 'react'
// import { useWallet } from 'use-wallet'
// import { provider } from 'web3-core'
// import { Contract } from 'web3-eth-contract'
// import { getMasterChefContract } from '../smol/utils'
// import { getAllowance } from '../utils/erc20'
// import useSmol from './useSmol'



// const useAllowance = (lpContract: Contract) => {
//   const [allowance, setAllowance] = useState(new BigNumber(0))
//   const { account }: { account: string; ethereum: provider } = useWallet()
//   const smol = useSmol()
//   const masterChefContract = getMasterChefContract(smol)

//   const fetchAllowance = useCallback(async () => {
//     const allowance = await getAllowance(
//       lpContract,
//       masterChefContract,
//       account,
//     )
//     setAllowance(new BigNumber(allowance))
//   }, [account, masterChefContract, lpContract])

//   useEffect(() => {
//     if (account && masterChefContract && lpContract) {
//       fetchAllowance()
//     }
//     let refreshInterval = setInterval(fetchAllowance, 10000)
//     return () => clearInterval(refreshInterval)
//   }, [account, masterChefContract, lpContract])

//   return allowance
// }

// export default useAllowance
