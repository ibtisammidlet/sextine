import * as IPFS from 'ipfs-core'
import * as fs	from 'fs'

    const file = fs.readFileSync('../ipfs-provider/files/ph5bd5c86128496/lazyload.jpg');
	const ipfs = await IPFS.create()
    const { cid } = await ipfs.add({ path: 'lazyload.jpg', content: file });
	console.info(cid)


