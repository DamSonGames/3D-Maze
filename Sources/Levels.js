/*

W = Wall
X = Floor
Txxxzzz = Teleport, xxx = x-axis (left - right) movement, zzz = z-axis (up - down) movement
Prrr = Player, rrr = Directional float (Up = 0.0, Left = 0.5, Down = 1.0, Right = 1.5)
F = Finish
_ = Empty (for efficiency)

*/

var levelpacks = [
	[
		[
			["W", "W", "W", "W", "W"],
			["W", "P1.5", "X", "X", "W"],
			["W", "X", "W", "X", "W"],
			["W", "X", "X", "F", "W"],
			["W", "W", "W", "W", "W"],
		],
		[
			["W", "W", "W", "W", "W", "W", "W", "W", "W"],
			["W", "P1.5", "X", "X", "W", "F", "X", "X", "W"],
			["W", "X", "W", "X", "W", "X", "W", "X", "W"],
			["W", "X", "X", "T+04000", "W", "X", "X", "X", "W"],
			["W", "W", "W", "W", "W", "W", "W", "W", "W"],
		],
		[
			["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
			["W", "X", "T+04000", "X", "W", "T-04000", "X", "X", "W", "X", "X", "T+04000", "W", "X", "T-04000", "X", "W"],
			["W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W"],
			["W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W"],
			["W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W", "X", "W"],
			["W", "P0.0", "G", "F", "W", "X", "W", "X", "X", "X", "W", "F", "W", "X", "G", "F", "W"],
			["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]
		],
		[
			["W", "W", "W", "W", "W", "W", "W", "W", "W"],
			["W", "W", "W", "W", "F", "W", "W", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "W", "W", "W", "X", "X", "T-03+08", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "X", "T+03+04", "X", "X", "W", "W", "W", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "X", "W", "W", "G", "W", "W", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "W", "W", "W", "X", "X", "T-03+02", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "X", "T+03+04", "X", "X", "W", "W", "W", "W"],
			["W", "X", "W", "W", "P0.0", "W", "W", "W", "W"],
			["W", "W", "W", "W", "W", "W", "W", "W", "W"],
			["W", "W", "W", "W", "X", "W", "W", "X", "W"],
			["W", "W", "W", "W", "X", "X", "T-03-04", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "X", "T+03+04", "X", "X", "W", "W", "W", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "X", "W", "W", "G", "W", "W", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "W", "W", "W", "X", "X", "T-03-16", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "X", "T+03-14", "X", "X", "W", "W", "W", "W"],
			["W", "X", "W", "W", "X", "W", "W", "W", "W"],
			["W", "W", "W", "W", "W", "W", "W", "W", "W"]
		],
		[
			["W", "W", "W", "W", "W", "W", "W", "W", "W"],
			["W", "X", "X", "W", "W", "W", "W", "X", "W"],
			["W", "X", "W", "W", "X", "X", "T-03+07", "X", "W"],
			["W", "T000+12", "W", "W", "X", "W", "W", "W", "W"],
			["W", "X", "W", "W", "X", "W", "X", "X", "W"],
			["W", "X", "W", "W", "X", "W", "W", "T000+24", "W"],
			["W", "X", "W", "W", "X", "W", "W", "X", "W"],
			["W", "X", "X", "X", "X", "X", "X", "X", "W"],
			["W", "W", "W", "W", "P0.0", "W", "W", "W", "W"],
			["W", "X", "X", "X", "X", "W", "_", "_", "_"],
			["W", "X", "W", "W", "W", "W", "W", "_", "_"],
			["W", "X", "W", "W", "X", "X", "W", "_", "_"],
			["W", "W", "W", "W", "X", "W", "W", "_", "_"],
			["W", "X", "X", "T000-04", "X", "W", "_", "_", "_"],
			["W", "X", "W", "W", "W", "W", "_", "_", "_"],
			["W", "X", "W", "_", "_", "_", "_", "_", "_"],
			["W", "X", "W", "_", "_", "_", "_", "_", "_"],
			["W", "T000-12", "W", "_", "_", "_", "_", "_", "_"],
			["W", "X", "W", "W", "_", "_", "_", "_", "_"],
			["W", "X", "X", "W", "_", "_", "_", "_", "_"],
			["W", "W", "W", "W", "W", "W", "_", "_", "_"],
			["_", "_", "W", "W", "F", "W", "_", "_", "_"],
			["_", "W", "W", "X", "X", "W", "W", "W", "W"],
			["_", "W", "X", "X", "W", "W", "W", "X", "W"],
			["_", "W", "X", "W", "X", "X", "T-03-15", "X", "W"],
			["_", "W", "X", "W", "X", "W", "W", "W", "W"],
			["_", "W", "X", "X", "X", "W", "_", "_", "_"],
			["_", "W", "W", "X", "W", "W", "W", "W", "W"],
			["_", "_", "W", "X", "X", "X", "X", "X", "W"],
			["_", "_", "W", "W", "W", "W", "W", "X", "W"],
			["_", "_", "_", "_", "_", "W", "W", "T000-24", "W"],
			["_", "_", "_", "_", "_", "W", "X", "X", "W"],
			["_", "_", "_", "_", "_", "W", "W", "W", "W"]
		]
	]
]