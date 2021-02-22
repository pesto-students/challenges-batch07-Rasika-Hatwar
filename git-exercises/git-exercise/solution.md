# Git Excercise insights
1.Git stores information in key value pair format.
2.Key is used to retrieve specific data.
3.Key is basically cryptographic hash function known as SHA Secure Hash Algorithm
4.Given piece of data, hash function gives 40 digit hexa decimal number respective to provided data
5.Value/Data stored in git in form of compressed data called BLOB, along with metadata. All details are stored in .git folder.
echo ->gives standard output to terminal
--to get SHA -> echo 'Hello, World!' | git hash-object --stdin
--to get SHA and write string in git-> echo 'Hello, World!' | git hash-object -w --stdin
--to add new file-> touch sample.txt
-- to add value to file-> echo 'Hello World!' > sample.txt
--to check value in file-> cat sample.txt
6.All data get stored in git as objects in .git folder.
--to check objects stored .git folder on windows-> tree.com .git
--to check type of object-> git cat-file -t <commit id>
--to check values ->git cat-file -p <commit-id>
7.Git stores file properties in git tree(file name, directory structure)
Git Tree- it contains pointers to blob , to other trees and metadata.
8.Git stores identical content only once, i.e SHA remains same for duplicate content.
9.Git performs other optimization activities too for beter tool experience.
10.Git Commit--> it is pointer to tree and contains metadata. SHA1 of the commit is hash of all the information in the commit.
11.Git staging area can never be remain empty!
12.Git Stash,Git references(Tags,Branches,Head) commands
13.Git Branch- pointer to the perticulsr commit,pointer changes as new commits are made.