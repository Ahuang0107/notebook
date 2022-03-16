# Git Workflow

## 1、分支管理

* main 分支作为发布版本，只要 merge 到了 main 的代码就意味着已经上了生产环境
* dev 分支作为开发版本，只要 merge 到了 dev 的代码就意味着已经过了 code review ，随时可以上生产环境
* new feature 的开发和一般 bug 的修复，通过在 dev 上创建新分支，比如：elase_huang/feat/#feat1 elase_huang/bug/#bug1
* hot_fix 分支是对生产环境的 bug 的紧急修复，直接由 main 分支上创建，对应的 bug 修改完发布后，之后还需要合并到 dev 分支上

## 2、工作流程

* feature 和 bug 每次提交前进行 rebase dev
* new feature 提交前 squash 成一个 commit
* bug 提交 commit 尽量细分
