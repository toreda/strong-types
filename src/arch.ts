/**
 * Major processor architectures.
 *
 * @category System Info
 */
export type Arch =
	/**
	 * ARC (Argonaut RISC Core) embedded processors. Family of 32-bit and
	 * 64-bit central processing units (CPUs) originally designed by ARC
	 * International.
	 *
	 * See: https://en.wikipedia.org/wiki/ARC_(processor)
	 */
	| 'arc'
	/**
	 * Intel's x86 architecture family.
	 *
	 * See: https://en.wikipedia.org/wiki/X86
	 */
	| 'x86'
	/**
	 * x86-64 (also known as x64, x86_64, AMD64, and Intel 64)
	 *
	 *	See: https://en.wikipedia.org/wiki/X86-64
	 */
	| 'x86_64'
	/**
	 * Advanced RISC Machines. Reduced instruction set computing (RISC) architectures
	 * for computer proceessors, configured for various environments.
	 *
	 * See: https://en.wikipedia.org/wiki/ARM_architecture
	 */
	| 'arm'
	/**
	 * 64-bit extension of the ARM architecture.
	 *
	 * See: https://en.wikipedia.org/wiki/AArch64
	 */
	| 'arm64'

	/**
	 * MIPS (Microprocessor without Interlocked Pipelined Stages)[1] is a reduced instruction
	 * set computer (RISC) instruction set architecture (ISA)[2]: A-1 [3]: 19  developed by MIPS
	 * Computer Systems, now MIPS Technologies.
	 *
	 * See: https://en.wikipedia.org/wiki/MIPS_architecture
	 */
	| 'mips'
	/**
	 * PowerPC (Performance Computing, sometimes abbreviated as PPC). Rreduced instruction
	 * set computer (RISC) instruction set architecture (ISA) created by the 1991
	 * Apple–IBM–Motorola alliance, known as AIM. PowerPC, as an evolving instruction set,
	 * has since 2006 been named Power ISA, while the old name lives on as a trademark for
	 * some implementations of Power Architecture–based processors.
	 *
	 * See: https://en.wikipedia.org/wiki/PowerPC
	 */
	| 'powerpc'
	/**
	 * Intel's 64-bit microprocessor that implement the Intel Itanium architecture.
	 * See: https://en.wikipedia.org/wiki/Itanium
	 */
	| 'itanium'
	/**
	 * SPARC (Scalable Processor Architecture). Reduced instruction set computing
	 * (RISC) instruction set architecture originally developed by Sun Microsystems
	 *
	 * See: https://en.wikipedia.org/wiki/SPARC
	 **/
	| 'sparc';
